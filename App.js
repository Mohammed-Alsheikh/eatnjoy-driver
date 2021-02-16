import './ReactotronConfig';
import Parse_Config from './ParseConfig';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/navigation';
import {Provider as StoreProvider} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Colors from './src/views/styles';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

Parse_Config();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    //accent: '#f1c40f',
  },
};

// persistor.purge();

let Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <Navigation />
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
    );
  }
}
