import { combineReducers } from "redux";
import config from "./configReducer.js";
import timerInfo from "./timerReducer";
// automagical mapping
export default combineReducers({ config,timerInfo });
