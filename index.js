const morph = require('morphdom')
const redux = require('redux')

const reducer = require('./reducer')
const shapes - require('./shapes')

const initialState = {
  players: [
    {id: 1, score: 0},
    {id: 2, score: 0}
  ],
  images: [
    shapes
  ]
}

const store = redux.createStore(reducer, initialState)

const dispatch = store.dispatch

const updateView = () => {
  const initialState = store.getState()
  const newState = render(initialState.shapes, dispatch)
  morph(products, newState)
}
