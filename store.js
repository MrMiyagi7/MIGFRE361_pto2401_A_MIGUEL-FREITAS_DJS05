// Intialises initial count
const initialcount = 0;

const tallyReducer = (state = initialcount, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

// Create the Redux store
const store = Redux.createStore(tallyReducer);

// Export the store to be used in other files
export default store;
