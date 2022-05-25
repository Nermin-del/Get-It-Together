import { combineReducers } from "redux";
import { ClubReducer } from "./ClubReducer";

export const ClubReducers = combineReducers({
    counter: ClubReducer
});