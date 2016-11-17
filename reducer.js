const clone = require('clone')

module.exports = function reducer(state, action) {
  var newState = clone(state)
  var {type, payload} = action
  switch (type) {
    case

    default:
    return newState

  }
}
