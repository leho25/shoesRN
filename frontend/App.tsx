import React from 'react';
import {View, Text} from 'react-native';
import Index from './src/screens';
import store from './src/redux/store';
import { Provider } from 'react-redux';


const App = () => {
  return(
    <Provider store={store}>
      <Index />
    </Provider>
  )
};

export default App;
