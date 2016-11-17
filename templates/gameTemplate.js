var h = require('hyperscript')

module.exports = gameTemplate

function gameTemplate (state, dispatch) {
  const { players, images } = state
  return h('div', {}, startButton)
}

function startButton () {
  return h('button', {onclick: () => dispatch({type: action})})
}
