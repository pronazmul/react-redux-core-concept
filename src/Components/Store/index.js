const { createStore } = require("redux")
const { default: counter } = require("./Reducer/Counter")
const store = createStore(counter)

export default store

