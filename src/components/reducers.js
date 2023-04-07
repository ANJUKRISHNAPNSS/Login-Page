import { combineReducers } from "redux";
import { dashboardReducers } from "./mainPageReducers";

export const rootReducer = combineReducers({

    dashboardReducers: dashboardReducers

})