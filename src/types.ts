import { type ExoticComponent, type ReactNode, type FC } from 'react'

export interface ModulePath {
  minimal: string

  // basic import path used to produce basic code
  basic: string

  // fake import path used used to teach GPT-3 to use module imports
  prompt: string

  // full import path for production, with minified code
  prod: string
}

export type RawSpecification = Record<string, string>
export type SpecCategory =
  | 'layout'
  | 'content'
  | 'image'
  | 'script'
  | 'audio'
  | 'style'
  | 'summary'
export type Specification = Record<SpecCategory, string[]>

export type ComponentTree = Record<string, any>[]

// https://beta.openai.com/docs/api-reference/completions/create
// to improve the quality of output we want to forbid certain things
export interface PromptSettings {
  temperature: number
  n: number
  bestOf: number
  bestOfBoost: number

  // attention, gpt and codex tokens are different! https://beta.openai.com/tokenizer?view=bpe
  gptLogitBias: Record<string, number>
  codexLogitBias: Record<string, number>

  frequencyPenalty: number
  presencePenalty: number
  stop?: string[]
}

export interface SearchResult {
  title: string
  subtitle: string
  description: string
}


export type Loose<T> = { [P in keyof T]?: ReactNode }

export type AppType = 'search' | 'content' | 'favorites' | 'settings'

export interface App {
  // unique app ID (very important)
  id: string

  // app title (and tab title)
  title: string

  // subtitle (not very used right now)
  subtitle?: string

  // the mini-prompt visible in the top bar
  prompt?: string

  // specification used to generate the content
  spec?: Specification

  // scene tree
  tree?: ComponentTree
}

export interface Tab {
  isActive: boolean

  isFavorite: boolean

  type: AppType

  // the tab is not a rehydrated app
  isNew: boolean
}

export type AppTab = App & Tab

export interface Link {
  title: string
  alt: string
}
export interface Settings {
  coreVendor: string
  imageVendor: string
  speechToTextLanguage: string
  useTurboPrompt: boolean
  usePlanStep: boolean
  useImproveStep: boolean
  huggingFaceKey: string
  huggingFaceModel: string
  openAIKey: string
  openAIModel: string
  stableDiffusionAPIKey: string
  customPlannerPrompt: string
  customBuilderPrompt: string
  customImproverPrompt: string
  useAutoCherryPick: boolean
  useVendorCherryPick: boolean
  useMockData: boolean
  useMockImages: boolean
}

export interface Param {
  /**
   * Documentation of the parameter (will be injectected in the prompt)
   */
  doc?: string

  /**
   * Actual name of the prop field (might be long)
   */
  prop?: string

  /*
   * possible values (aka "types")
   */
  values?: Array<string | number | boolean>
}
export interface Component {
  /**
   * The React component to use
   */
  component?: ExoticComponent | FC

  /**
   * Documentation of component.
   *
   * Should be sparse, only a few words.
   */
  doc: string

  // indicate a scope restriction
  allowedParents?: string
  allowedChildren?: string

  /**
   * Record of parameters
   */
  params?: Record<string, Param>
}
export type API = Record<string, Component>

export type Example = Record<string, Record<string, any>>
export type Examples = Record<string, Example>

export interface Plugin {
  name: string
  examples?: Examples
  api: API
}

export interface Plugin {
  examples?: Examples
  api: API
}

export type Plugins = Record<string, Plugin>
