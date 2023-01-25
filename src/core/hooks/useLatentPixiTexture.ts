import { useMemo } from 'react'
import { Texture } from 'pixi.js'

import { useImage } from './useImage'

/**
 * Generate a latent pixi texture
 */
export const useLatentPixiTexture = ({
  alt,
  width,
  height,
}: {
  alt?: string
  width?: number | string
  height?: number | string
}) => {
  const image = useImage({ alt, width, height })

  const texture = useMemo(() => (image ? Texture.from(image) : null), [image])

  return texture
}
