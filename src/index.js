import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import { createStore } from "./createStore";
import { rootReduser } from "./Redux/rootReducer";
import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  INIT_RELOAD,
} from "./redux/constants";

import "./styles.css";
import { decrement, increment, asyncIncrement } from "./Redux/actions";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

// const store = createStore(rootReduser, 0);
const store = createStore(rootReduser, 0, applyMiddleware(thunk));

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
  store.dispatch({ type: "INIT_APPLICAITION" });
  store.dispatch(asyncIncrement());
};

const handleTheme = () => {
  // document.body.classList.toggle("dark");
};

addBtn.addEventListener("click", handleIncrement);
subBtn.addEventListener("click", handleDecriment);
asyncBtn.addEventListener("click", handleAsync);
themeBtn.addEventListener("click", handleTheme);

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
});

store.dispatch({ type: "INIT_APPLICAITION" });
