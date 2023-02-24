import { createStore } from "./createStore";
import { rootReduser } from "./Redux/rootReducer";

import "./styles.css";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const store = createStore(rootReduser, 0);

// const render = () => {
//   counter.innerHTML = store.getState();
// };

const handleIncrement = () => {
  store.dispatch({ type: "INCREMENT" });
};

const handleDecriment = () => {
  store.dispatch({ type: "DECREMENT" });
};

const handleAsync = () => {
  setTimeout(() => {
    store.dispatch({ type: "INCREMENT" });
  }, 1500);
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
