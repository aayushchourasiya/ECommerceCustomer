import {combineReducers} from 'redux';
import { cartReducer } from './cartReducer';
import {updateReducer} from './updateReducer';
import {userReducer} from './userReducer';
const reducers = combineReducers({
  updateData: updateReducer,
  user: userReducer,
  cart: cartReducer,
});
export default reducers;
