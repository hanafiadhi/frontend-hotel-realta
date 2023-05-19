import { combineReducers } from "redux";
import RestoMenuReduce from "./resto/menu";

const rootReducer = combineReducers({
  restoMenuState: RestoMenuReduce,
});
export default rootReducer;
