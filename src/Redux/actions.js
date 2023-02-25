import {
  ASYNC_INCREMENT,
  DECREMENT,
  INCREMENT,
  CHANGE_THEME,
  DISABLED_BTN,
  ENABLED_BTN,
} from "./constants";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function disabledBtn() {
  return {
    type: DISABLED_BTN,
  };
}
export function enabledBTN() {
  return {
    type: ENABLED_BTN,
  };
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(enabledBTN());
    setTimeout(() => {
      dispatch({ type: ASYNC_INCREMENT });
      dispatch(disabledBtn());
    }, 1500);
  };
}
