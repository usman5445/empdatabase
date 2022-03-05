import { combineReducers } from "redux";
import handleDeleteReducer from "./handleDeleteReducer";
import handleUpdateReducer from "./handleUpdateReducer";
import manageDataReducer from "./manageDataReducer";

const rootReducer = combineReducers({
  dtr: manageDataReducer,
  changer: handleUpdateReducer,
  deleter: handleDeleteReducer,
});
export default rootReducer;
