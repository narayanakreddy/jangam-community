import { combineReducers } from "redux";
import AuthReducer from "./auth.reducer";
import AppReducer from "./app.reducer";


const appReducer = combineReducers({
  auth: AuthReducer,
  app: AppReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
