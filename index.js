const morph = require('morphdom')
const redux = require('redux')

const reducer = require('./reducer')

const initialState = {
  
}

const store = redux.createStore(reducer, initialState)

const dispatch = store.dispatch
