import React from 'react'
import { Provider } from 'react-redux'
import store from './Components/Store'
import TestComponent from './Components/TestComponent'

const App = () => {
  return (
    <Provider store ={store}>
      <TestComponent/>
    </Provider>
  )
};

export default App;
