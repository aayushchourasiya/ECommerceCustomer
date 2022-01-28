import {combineReducers} from 'redux';
import {productReducer} from './productReducer';
import {updateReducer} from './updateReducer';
import {userReducer} from './userReducer';
const reducers = combineReducers({
  updateData: updateReducer,
  user: userReducer,
  productCategory: productReducer,
});
export default reducers;
