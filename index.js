const morph = require('morphdom')
const redux = require('redux')

const reducer = require('./reducer')
const shapes = require('./shapes').shapes
const game = require('./templates/gameTemplate')
const play = require('./templates/gamePlayTemplate')

console.log(shapes);
const initialState = {
  players: [
    {id: 1, score: 0},
    {id: 2, score: 0}
  ],
  shapes
}

const store = redux.createStore(reducer, initialState)
const main = document.querySelector('main')

const dispatch = store.dispatch

const updateView = () => {
  const state = store.getState()
  const newView = game(state)
  morph(initialView, newView)
}
const goToGame = () => {
  morph(initialView, play(initialState, dispatch))
}
const addShape = (shapeSvg) => {
  const svg = document.createElement("svg")
  main.appendChild(svg)
  const path = document.createElement("path")
  svg.appendChild(path)

}

const initialView = main.appendChild(game(goToGame))
store.subscribe(updateView)
