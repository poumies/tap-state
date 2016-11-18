var h = require('hyperscript')

module.exports = gamePlayTemplate

function gamePlayTemplate (state, dispatch) {
  const { players, shapes } = state
  console.log(shapes[0].shape);
  return h('div', {onkeypress: () => handleKeyPress}, [
            h('svg', { width: "64px", height: "64px" }, h('path', {d: shapes[0].shape}))
          ])
}

function handleKeyPress(e) {
  if(e.which == 81) {
    dispatch({type: 'ADD_ONE', payload: players[0].id})
  } if (e.which == 80) {
    dispatch({type: 'ADD_ONE', payload: players[1].id})
  }
}
