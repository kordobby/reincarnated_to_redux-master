import { combineReducers } from "redux";
import spellReducer from './spellReducer';

const rootReducer = combineReducers ({
  spellReducer
});

export default rootReducer;