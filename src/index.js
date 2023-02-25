import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// import { createStore } from "./createStore";
import { rootReduser } from "./Redux/rootReducer";
import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  INIT_RELOAD,
} from "./redux/constants";

import "./styles.css";
import {
  decrement,
  increment,
  asyncIncrement,
  changeTheme,
} from "./Redux/actions";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

// function logger(state) {
//   return function (next) {
//     return function (action) {
//       console.log("State", state);
//       console.log("State", action);
//       return next(action);
//     };
//   };
// }

// const store = createStore(rootReduser, 0);
const store = createStore(rootReduser, applyMiddleware(thunk, logger));

// const render = () => {
//   counter.innerHTML = store.getState();
// };

const handleIncrement = () => {
  store.dispatch(increment());
};

const handleDecriment = () => {
  store.dispatch(decrement());
};

const handleAsync = () => {
  store.dispatch(asyncIncrement());
  // store.dispatch(enabled());
};

const handleTheme = () => {
  const newTheme = document.body.classList.contains("ligth") ? "dark" : "ligth";
  store.dispatch(changeTheme(newTheme));
};

addBtn.addEventListener("click", handleIncrement);
subBtn.addEventListener("click", handleDecriment);
asyncBtn.addEventListener("click", handleAsync);
themeBtn.addEventListener("click", handleTheme);

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value;
  [addBtn, subBtn, themeBtn, asyncBtn].forEach((btn) => {
    btn.disabled = state.theme.disabled;
  });
});

store.dispatch({ type: "INIT_APPLICAITION" });
