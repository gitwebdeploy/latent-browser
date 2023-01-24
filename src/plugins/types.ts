import { ExoticComponent, FC } from 'react'

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
