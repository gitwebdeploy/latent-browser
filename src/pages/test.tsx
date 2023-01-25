import { useEffect, useState } from 'react'

import { TreeRenderer } from '~/components'
import { mockTreeString } from '~/core/mocks'
import { type Specification } from '~/prompts'

// a search result page in the style of a famous search engine =)
function Test() {
  const [tree, setTree] = useState<string>('')
  useEffect(() => {

    const spec: Specification = {
      layout: ['many articles'],
      content: ['a blog about cats'],
      image: [],
      script: [],
      audio: [],
      style: [],
      summary: [],
    }
    // const builderPrompt = getBuilderPrompt(spec, apiDoc)
    // console.log('builderPrompt:', builderPrompt)

    setTree(mockTreeString)
  }, [])

  // later we will put the colors into Tailwind, but right now let's just clone
  // some famous search engine colors
  return (
    <>
      <TreeRenderer>{tree}</TreeRenderer>
    </>
  )
}

export default Test
