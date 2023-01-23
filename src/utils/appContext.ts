import * as $ from 'jquery'

// this is the data exposed to the app
export const appContext: any = {
  $mouse: {
    x: 0, //mouse coordinates in X
    y: 0, // mouse coordinates in Y
    down: false, // if mouse is clicked, false if not clicked
  },
}

function onMouseUpdate(e: MouseEvent) {
  const $mouse = appContext.$mouse
  $mouse.x = e.pageX
  $mouse.y = e.pageY
}
function onMouseDown() {
  console.log('onMouseDown')
  appContext.$mouse.down = true
}
function onMouseUp() {
  console.log('onMouseUp')
  appContext.$mouse.down = false
}

if (typeof window !== 'undefined') {
  window['$mouse'] = appContext.$mouse
  window['$'] = $

  document.addEventListener('mousemove', onMouseUpdate, false)
  document.addEventListener('mouseenter', onMouseUpdate, false)
  document.addEventListener('mousedown', onMouseDown, false)
  document.addEventListener('mouseup', onMouseUp, false)

  // TODO notify the react component, or use polling
}
