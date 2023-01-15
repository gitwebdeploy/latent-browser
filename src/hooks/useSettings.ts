import { useLocalStorage } from '@mantine/hooks'
import { Settings } from '../types'

export const useSettings = (
  defaultValue: Settings = {
    coreVendor: 'OpenAI',
    imageVendor: 'OpenAI_dalle2',
    speechToTextLanguage: '',
    useTurboPrompt: false,
    huggingFaceKey: '',
    huggingFaceModel: 'EleutherAI/gpt-j-6B',
    openAIKey: '',
    openAIModel: 'text-davinci-003',
    customPlannerPrompt: '',
    customBuilderPrompt: '',
    customImproverPrompt: '',
    useMockData: false,
    usePlanStep: true,
    useImproveStep: true,
    useAutoCherryPick: false,
    useVendorCherryPick: false,
  }
) =>
  useLocalStorage<Settings>({
    key: 'settings-rev-3',
    defaultValue,
  })
