import { createContext } from 'react'
import * as $ from 'jquery'

// this is the data exposed to the app
export const appContext: any = {
  $screen: {
    mouseX: 0, //mouse coordinates in X
    mouseY: 0, // mouse coordinates in Y
    mouseDown: false, // if mouse is clicked, false if not clicked
  },
}

export const AppContext = createContext(appContext)

function onMouseUpdate(e: MouseEvent) {
  const $screen = appContext.$screen
  $screen.mouseX = e.pageX
  $screen.mouseY = e.pageY
}
function onMouseDown() {
  // console.log('onMouseDown')
  appContext.$screen.mouseDown = true
}
function onMouseUp() {
  // console.log('onMouseUp')
  appContext.$screen.mouseDown = false
}

if (typeof window !== 'undefined') {
  window['$screen'] = appContext.$screen
  window['$'] = $

  document.addEventListener('mousemove', onMouseUpdate, false)
  document.addEventListener('mouseenter', onMouseUpdate, false)
  document.addEventListener('mousedown', onMouseDown, false)
  document.addEventListener('mouseup', onMouseUp, false)

  // TODO notify the react component, or use polling
}
