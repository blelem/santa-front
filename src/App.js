import React, { Component } from 'react';
import SantaMap from './components/SantaMap'
import './App.css';
import {Grommet, Box} from 'grommet'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import rootSaga from './sagas'


const store = configureStore()
store.runSaga(rootSaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Grommet plain >
          <Box width="large" height="large" background="blue">
            <SantaMap></SantaMap>
          </Box>
        </Grommet>
      </Provider>
      ) 
  }
}

export default App;
