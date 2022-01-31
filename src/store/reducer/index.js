import {combineReducers} from 'redux';
import { cartReducer } from './cartReducer';
import {updateReducer} from './updateReducer';
import {userReducer} from './userReducer';
import {themeReducer} from './themeReducer';
const reducers = combineReducers({
  updateData: updateReducer,
  user: userReducer,
  cart: cartReducer,
  theme: themeReducer
});
export default reducers;
