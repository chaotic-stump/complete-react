import { createStore } from 'redux';

const store = createStore((state = { count: 4 }) => {
  return state;
});

console.log(store.getState());

// Actions - for creating changing data stores
// I'd like to increment the count
// I'd like to reset the count to zero