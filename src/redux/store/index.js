import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import Reactotron from '../../../ReactotronConfig';
import reducers from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    Reactotron.createEnhancer(),
  ),
);
const persistor = persistStore(store);

export {store, persistor};
