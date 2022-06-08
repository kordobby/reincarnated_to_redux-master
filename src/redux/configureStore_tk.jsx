import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./modules/spellToolkit/spellSlice";
export const store = configureStore({
  reducer : {
    spellToolkit : customReducer
  }
})