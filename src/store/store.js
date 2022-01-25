import {createStore} from 'redux';
import reducers from './reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export {store, persistor};