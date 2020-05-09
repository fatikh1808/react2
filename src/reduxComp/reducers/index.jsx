import {combineReducers} from "redux";
import {pageReducer} from "./page";
import {basketReducer} from "./basket";
import {auth} from './auth';
import {adminReducer} from "./admin";

export const rootReducer = combineReducers({
  page: pageReducer,
  auth: auth,
  basket: basketReducer,
  admin: adminReducer,
});
