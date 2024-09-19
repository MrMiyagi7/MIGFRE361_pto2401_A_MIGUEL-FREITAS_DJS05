import store from "./store.js";

// Function to log the current state to the console
const logState = () => {
  console.log(`Current state: ${store.getState()}`);
};

// Initial log of the current state
logState();
