import store from "./store.js";

// Function to log the current state to the console
const logState = () => {
  console.log(`Current state: ${store.getState()}`);
};

// Initial log of the current state
logState();

// Subscribe to store updates to log state changes whenever the state changes
store.subscribe(logState);

// Dispatching actions for increment, decrement, and reset

// Increment action
store.dispatch({ type: "INCREMENT" }); // Logs: Current state: 1
store.dispatch({ type: "INCREMENT" }); // Logs: Current state: 2

// Decrement action
store.dispatch({ type: "DECREMENT" }); // Logs: Current state: 1

// Reset action
store.dispatch({ type: "RESET" });
