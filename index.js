const morph = require('morphdom')
const redux = require('redux')

const reducer = require('./reducer')
const shapes = require('./shapes').shapes

const initialState = {
  players: [
    {id: 1, score: 0},
    {id: 2, score: 0}
  ],
  shapes
}

const store = redux.createStore(reducer, initialState)

const dispatch = store.dispatch

const updateView = () => {
  const initialState = store.getState()
  const newState = render(initialState.images, dispatch)
  morph(products, newState)
}
