export function createStore(rootReduser, initilState = 0) {
  let state = rootReduser(initilState, { type: "__INIT__" });
  const subscribers = [];
  return {
    //   action === {type:'INCREMENT'}
    dispatch(action) {
      state = rootReduser(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}
