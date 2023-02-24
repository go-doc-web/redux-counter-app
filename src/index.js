import "./styles.css";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");

let state = 0;

const render = () => {
  counter.innerHTML = state;
};

const handleIncrement = () => {
  state++;
  render();
};

const handleDecriment = () => {
  state--;
  render();
};

const handleAsync = () => {
  setTimeout(() => {
    state++;
    render();
    console.log("Async");
  }, 2000);
};

addBtn.addEventListener("click", handleIncrement);
subBtn.addEventListener("click", handleDecriment);
asyncBtn.addEventListener("click", handleAsync);

render();
