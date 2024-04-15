import React from 'react';
import {View, Text} from 'react-native';
import Index from './src/screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store,persistor} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
};

export default App;
