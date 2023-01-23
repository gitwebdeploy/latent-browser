import { Settings } from '~/types'
import { ImaginedImage } from '~/providers/openai'
import { http } from '@tauri-apps/api'

import * as mocks from '../openai/mocks'

interface TextToImgQuery {
  key: string // settings.stableDiffusionAPIKey,
  prompt: string
  negative_prompt: string // '((out of frame)), ((extra fingers)) ...'
  width: string
  height: string
  samples: string // '1'
  num_inference_steps: string // '20'
  seed: number // can also be null
  guidance_scale: number //  7.5
  webhook: string
  track_id: string // maybe it's a number, I'm not sure
}

interface TextToImgMeta {
  H: number // 512
  W: number // 512
  enable_attention_slicing: string // 'true'
  file_prefix: string // '05c3260d-6a2e-4aa5-82f0-e952f2a5fa10'
  guidance_scale: number // 7.5
  model: string // 'runwayml/stable-diffusion-v1-5'
  n_samples: number // 1
  negative_prompt: string // '((out of frame)), ((extra fingers)),...'
  outdir: string // 'out'
  prompt: string // 'ultra realistic close up portrait.... hyper detail, cinematic lighting...'
  revision: string // 'fp16'
  safety_checker: string // 'none'
  seed: number // 1793745243
  steps: number // 20
  vae: string // 'stabilityai/sd-vae-ft-mse'
}

interface TextToImgResponse {
  status: string // 'success'
  generationTime: number // 2.920767068862915
  id: number // 302455
  output: string[] // URL(s) to the PNG, hosted on cloudfront
  meta: TextToImgMeta
}

export const imagineImage = async (
  prompt: string,
  settings?: Settings
): Promise<ImaginedImage> => {
  console.log('imagineImage', prompt)
  if (settings?.useMockImages || !settings.stableDiffusionAPIKey) {
    return mocks.image
  }

  // See the StableDiffusionAPI doc for limitations
  // owner fo an enterprise account can query larger sizes
  const size = 512
  const width = size
  const height = size

  // https://stablediffusionapi.com/docs
  const query: TextToImgQuery = {
    key: settings.stableDiffusionAPIKey,
    prompt,
    negative_prompt:
      '((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, glitchy, ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), (missing lips), ((extra legs))',
    width: `${width}`,
    height: `${height}`,
    samples: '1',
    num_inference_steps: '20',
    seed: null, // could be interesting for us to use the app ID, for reproductible results
    guidance_scale: 7.5,
    webhook: null, // interesting too!
    track_id: null,
  }

  let url = ''
  try {
    /*
    curl --header "Content-Type: application/json" \
  --request POST \
  --data '{ "key": "XQ2aIQtmrm5PtdIetRS7Jq6Oy3mvnsk6qMGXwIeuYJbteHsUoEPPJT4ZGiwb", "prompt": "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K", "negative_prompt": "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime", "width": "512", "height": "512", "samples": "1", "num_inference_steps": "20", "seed": null, "guidance_scale": 7.5, "safety_checker":"yes", "webhook": null, "track_id": null }' \
  https://stablediffusionapi.com/api/v3/text2img
  */

    const response = await fetch(
      `https://stablediffusionapi.com/api/v3/text2img`,
      {
        headers: {
          // Authorization: `Bearer ${apiToken}`
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: '{ "key": "XQ2aIQtmrm5PtdIetRS7Jq6Oy3mvnsk6qMGXwIeuYJbteHsUoEPPJT4ZGiwb", "prompt": "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K", "negative_prompt": "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime", "width": "512", "height": "512", "samples": "1", "num_inference_steps": "20", "seed": null, "guidance_scale": 7.5, "safety_checker":"yes", "webhook": null, "track_id": null }',
        //  body: JSON.stringify(query),
      }
    )
    const results = response as unknown as TextToImgResponse
    url = results?.output?.[0]
    if (!url) {
      throw new Error('no usable image URL found in response')
    }
  } catch (err) {
    console.error('failed to get the image: ' + err)
    return mocks.image
  }

  return {
    url,
    prompt,
    width,
    height,
  }
}
