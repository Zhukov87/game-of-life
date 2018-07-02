import { combineReducers } from "redux";
import gameField from "./gameField.reducer";
import initialGameData from "./initialGameData.reducer";

export default combineReducers({
  gameField,
  initialGameData
});
