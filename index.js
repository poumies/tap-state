const morph = require('morphdom')
const redux = require('redux')

const reducer = require('./reducer')
const shapes = require('./shapes').shapes
const game = require('./templates/gameTemplate')

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

const initialView = main.appendChild(game(initialState, dispatch))
store.subscribe(updateView)
