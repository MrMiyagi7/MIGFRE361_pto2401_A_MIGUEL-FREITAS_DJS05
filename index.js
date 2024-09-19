import store from "./store.js";

// Function to log the current state to the console
const logState = () => {
  console.log(`Current state: ${store.getState()}`);
};

// Initial log of the current state
logState();

// Subscribe to store updates to log state changes whenever the state changes
store.subscribe(logState);
