import {combineReducers} from "redux";
import {pageReducer} from "./page";
import {basketReducer} from "./basket";
import {userReducer} from "./user";
import {adminReducer} from "./admin";

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  basket: basketReducer,
  admin: adminReducer,
});
