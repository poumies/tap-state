var h = require('hyperscript')

module.exports = gameTemplate

function gameTemplate (goToGame) {
  return h('div', {}, [
            h('button', {onclick: () => goToGame()}, 'Push to start the fun'),
            h('br'),
            h('p', 'This game is a test of your shape knowledge'),
            h('p', 'A shape will flash on the screen and the first player to correctly identify the shape and press their key gains a point.'),
            h('p', 'Player 1 uses key (Q)'),
            h('p', 'Player 2 uses key (P)'),
            h('p', 'Press the start button to begin.')])
}
