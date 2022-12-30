# web4

A browser for web content generated by GPT-3.

this project is free but experimental, you will have to configure your own API credentials to access OpenAI (for GPT-3 / text-davinci-003, and dall-e 2).

Currently Replicate (stable diffusion) is disabled, as I had some latency issues with it (maybe I will put it back in the future!)

## Quick start

### Prerequisites

You will need NVM and Node 18.12.1

### Initial setup

```bash
cd web4
nvm use
yarn
```

Don't mind too much those errors (we don't use IPFS yet):

```
electron@npm:1.8.8 couldn't be built successfully
wrtc@npm:0.4.7 couldn't be built successfully
```

The app will still load just fine.

### Before starting the app

web4 is free, but not OpenAI! You will need to configure your token in a `.env.local` config file:

```
cp .env.sample .env.local
open .env.local
```

And configure your OpenAI access token key:

```
NEXT_PUBLIC_PROVIDER_OPENAI_API_TOKEN=write_your_openai_key_here
```

### Running the app in development

You have 3 different options to run the app:

#### In a browser (recommended)

This solution is recommended during development or if you experience build issues.

```bash
yarn dev
```

Then go to http://localhost:1420

#### In a standalone browser (advanced)

This solution requires a working Rust environment, and is recommended if you need to develop things interacting with the OS (eg. custom windows, system toolbar, auto updater..)

```bash
yarn tauri:dev
```

#### Generate a production build for yourselves (advanced)

This is not recommended for day-to-day development as it is slow, and currently there is an issue with images.

```bash
yarn tauri build
```

then:

- copy the app to your Application dir
- start the app

### Known important bugs

Images don't seem to work when runing a standalone built using `yarn tauri build`, it might be caused by a security setting.

## Using the browser

### Working (most of the time) examples

Here are some examples to get you started:

- `a back-office application to manage users. There is a table with editable cells, a button to add a new user, and a counter of users.`
- `a simulation of calculating PI by generating random dots inside a circle. The simulator should include a slider to adjust the speed, a reset button, and the current estimate of PI.`
- `a simple app to compute your BMI, using form inputs for age, height and weight (in kilos)`
- `a whack-a-mole game but with spiders, a css 3-per-3 grid, emojis, and JS code`
- `a clone of asteroid using <canvas>, the mouse should orient the spaceship, it should fire bullets when clicking, and bullets can destroy asteroids.`
- `website for a company selling time travel visit packages (great pyramids, Trojan wars..). The website features 3 polaroid pictures taken by tourists of those eras`

### Non-working examples

Those examples don't work yet.. maybe one day in text-davinci-004 or 005?

- `a 120 BPM drum machine made using tone.js, with a step sequencer made using html checkboxes, to indicate when to play. Each row should be a different instrument (kick, snare, hihat), 8 buttons per row. There is a button to start/stop.`

## FAQ

### The UI/UX should be improved

I agree!

### Uhh.. something went wrong

Try clicking again on generate 🎲

### No I mean, something went REALLY wrong

Maybe you did too many requests to OpenAI?

### I don't.. know?

Wait a bit then restart the application, eg. kill it from the terminal.
