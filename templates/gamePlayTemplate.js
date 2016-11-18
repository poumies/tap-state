var h = require('hyperscript')
var html = require('yo-yo')

module.exports = gamePlayTemplate

function gamePlayTemplate (state, dispatch) {
  const { players, shapes } = state
  return h('div', {onkeypress: () => handleKeyPress}, shapes.map((shape) => {
    console.log(shape);
    return html`
    <svg width="64px" height="64px" ><path d=${shape.shape}/></svg>
    `
  })
    )
}

function handleKeyPress(e) {
  if(e.which == 81) {
    dispatch({type: 'ADD_ONE', payload: players[0].id})
  } if (e.which == 80) {
    dispatch({type: 'ADD_ONE', payload: players[1].id})
  }
}
