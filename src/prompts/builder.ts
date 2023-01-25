import { Settings } from '~/types'

import { Specification } from './types'

// note: I wish I could put those examples in their separate plugins,
// but we can combine them so example separation is difficult
const examples = `
# simple blog made by a dog
- "ui.page⎛t≋site߷pri≋#000000߷sec≋#666666߷fg≋#ffffff߷bg≋#cccccc߷accent≋#ff0000":
  - "ui.navbar⎛f≋true߷r≋true":
    - "ui.button⎛Home"
    - "ui.button⎛About"
  - "ui.md⎛
      # A dog's life
      Welcome to my blog!
      On this site you will
      know *everything* about my dog life.
      Woof, woof!"
  - "co.image⎛photo portrait of a cute dog sticking the tongue in a living room, Sigma 24mm f/8, instagram"
# a calculator app to add and multiple two numbers X and Y
- "ui.page⎛t≋app":
  - "ui.form⎛":
    - "ui.field⎛t≋number߷i≋num1߷l≋X"
    - "ui.field⎛t≋number߷i≋num2߷l≋Y"
  - "co.js⎛⎝$x = parseInt($('#num1').val() || '0'), $y = parseInt($('#num2').val() || '0'), $z = $x + $y⎞"
  - "ui.p⎛Result: ⎝$z⎞"
# a one page book called "The Test" written by an anonymous developer (written in grey), with two test paragraphs in dark green and blue text color schemes
- "pf.pdf⎛":
  - "pf.h1⎛The Test"
  - "pf.author⎛c≋#484a48߷Anonymous Developer"
  - "pf.h3⎛c≋#16a42e߷Hello"
  - "pf.p⎛c≋#057317߷Hello. This is a test."
  - "pf.h3⎛c≋#1674a4߷World"
  - "pf.p⎛c≋#052c63߷Hello, World!"
# minimalist page displaying the mouse cursor position, with a simple 2-chords song playing in the background. It has a carousel showing a couple of picture of a guitar and piano. There is a side menu on the left for other actions.
- "ui.page⎛t≋app":
  - "ui.sidebar⎛":
    - "ui.sidebar_item⎛i≋home߷Home"
    - "ui.sidebar_item⎛i≋info߷Other"
  - "ui.content⎛":
    - "ui.h1⎛Mouse tracking app"
    - "ui.md⎛Mouse cursor is at *⎝$screen.mouseX⎞* and *⎝$screen.mouseY⎞*"
    - "mu.song⎛a≋true߷b≋110":
      - "mu.track⎛steps≋⎝[['C3','E3','G3'],['G3','B4','D4']]⎞":
        - "mu.instrument⎛type≋synth"
    - "ui.h2⎛Images"
    - "ui.slideshow⎛h≋600px":
      - "co.image⎛photo of grand piano on a scene, bright lights, canon EOS | Sigma 85mm f/8"
      - "co.image⎛photo of violin in its case, close-up, Nikon D810 | ISO 64 | focal length 20mm | Aperture f/9 | Exposure Time 1/40 Sec"
# Landing page of a Swiss device manufacturer selling a mysterious watch to predict the future. It also offers some kind of time travelling insurance plan
- "ui.page⎛t≋site":
  - "ui.md⎛
    # TimeWatch. Future is bright.
    Stay ahead of the masses and purchase our time travelling device, marvelously crafted in precious time-resistant materials. Time to build *your* future!"
  - "ui.feats⎛t≋Swiss design.߷s≋Your TimeWatch will be your companion for life."
    - "ui.feat⎛i≋clock߷t≋Predict the future߷Predict the future, not the past. With the new TimeWatch you see what's coming see up to 2 days in advance, 5 for Pro users."
    - "ui.feat⎛i≋microscope߷t≋Incredible quality߷Made in the Swiss Alps our TimeWatch has been tested in all kind of harsh environments. It passes the trial of time."
    - "ui.feat⎛i≋health߷t≋SaveMyLife+߷Our special life insurance program! If you get injured our TimeSquad will travel back to time to save you."
    - "ui.testimonial⎛a≋John Doe߷b≋Executive Assistant߷c≋photo of an executive assistant, working on a computer, bokeh߷q≋Time is money and TimeWatch changed my life."
# 3D game app with three rgb balls of various size, no UI but a 3D text saying Booya. Balls should become 2x AS big and white when we click
- "ui.page⎛t≋full":
  - "co.js⎛⎝$a = $screen.mouseDown ? 2 : 1⎞"
  - "co.js⎛⎝$b = '#ffffff'⎞"
  - "fb.scene⎛":
    - "fb.text3D⎛Booya"
    - "fb.ball⎛s≋⎝$a * 1.5⎞߷c≋⎝$screen.mouseDown ? $b : '#ff0000'⎞"
    - "fb.ball⎛s≋⎝$a * 2.5⎞߷c≋⎝$screen.mouseDown ? $b : '#00ff00'⎞"
    - "fb.ball⎛s≋⎝$a * 3.5⎞߷c≋⎝$screen.mouseDown ? $b : '#0000ff'⎞"`

export const getBuilderPrompt = (
  spec: Specification,
  apiDoc: string,
  settings?: Settings
) =>
  `Build the YAML skeleton tree of a web page.
Documentation of available components and their parameters:
${apiDoc}

You are free to use the following variables (if you write JS expression you need to escape double quotes):
- $screen.mouseX: mouse position in X
- $screen.mouseY: mouse position in Y
- $screen.mouseDown: true if mouse is down

Rules:
- You can create new variables to change multiple items at once.
- The value of a YAML field can be either empty, text string, oa YAML list of children elements.
- Attention: The text content is final and must be fully written in English not Latin!
${settings?.customBuilderPrompt || ''}
Examples:
\`\`\`yaml
${examples}
\`\`\`

Final instructions:
${Object.entries(spec)
  .filter(([k, v]) => v?.length)

  // the hack is disabled for now, let's try!
  /*
  // temporary hack until we can figure out what to do with the rest
  .filter(([k, v]) => k === 'content' || k === 'summary')
  */

  .map(([k, v]) => `- ${k}: ${v.join('. ')}`)
  .join('\n')}
\`\`\`yaml
`
