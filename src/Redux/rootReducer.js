import { combineReducers } from "redux";
import {
  ASYNC_INCREMENT,
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  ENABLED_BTN,
  DISABLED_BTN,
} from "./constants";

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else if (action.type === ASYNC_INCREMENT) {
    return state + 2;
  }
  return state;
}
const initialThemeState = {
  value: "ligth",
  disabled: false,
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        value: action.payload,
      };
    case ENABLED_BTN:
      return {
        ...state,
        disabled: true,
      };
    case DISABLED_BTN:
      return {
        ...state,
        disabled: false,
      };

    default:
      return state;
  }
}

export const rootReduser = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
