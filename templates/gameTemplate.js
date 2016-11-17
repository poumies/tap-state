var h = require('hyperscript')

module.exports = gameTemplate

function gameTemplate (state, dispatch) {
  const { players, images } = state
  return h('div', {}, startButton)
}

function startButton () {
  return h('button', {onclick: () => dispatch({type: action})}, 'Push to start the fun')

  let instructions = `
  This game is a test of your shape knowledge
  A shape will flash on the screen and the first player to correctly identify the shape and press their key gains a point.
  Player 1 uses key (Q)
  Player 2 uses key (P)
  Press the start button to begin.
  
  `
}
