import {
  ASYNC_INCREMENT,
  INCREMENT,
  DECREMENT,
  INIT_RELOAD,
} from "./constants";

export function rootReduser(state, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else if (action.type === ASYNC_INCREMENT) {
    return state + 2;
  }
  return state;
}
