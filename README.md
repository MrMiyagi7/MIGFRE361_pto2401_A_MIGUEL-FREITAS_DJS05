# Tally App

## Overview

This project is a simple tally application built using Redux to manage the state. The application demonstrates basic Redux concepts such as creating a store, dispatching actions, and subscribing to state changes. The main functionalities include incrementing, decrementing, and resetting a count, with state changes logged to the console.

## How to Run the Code

To run this project, follow these steps:

### Clone the Repository

```
git clone [https://github.com/MrMiyagi7/MIGFRE361_pto2401_A_MIGUEL-FREITAS_DJS05.git]
cd tally-app

```

### Open the Project

Simply open the index.html file in a web browser.

```

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tally-App</title>
  </head>
  <body>
    <!-- Redux CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.1.2/redux.min.js"></script>

    <!-- External JS Files -->
    <script type="module" src="./store.js"></script>
    <script type="module" src="./index.js"></script>
  </body>
</html>

```

## Approach

### State Management with Redux

- Created a Redux store using a simple reducer function that handles INCREMENT, DECREMENT, and RESET actions.
- Implemented action dispatching and state subscription to log state changes to the console.

### Setting Up the Environment

- Used Redux CDN to include Redux in the project, avoiding issues with unsupported file types in the browser environment.

### Code Structure

- store.js: Defines the reducer and creates the Redux store.
- index.js: Handles the dispatch of actions and subscribes to store updates.

## Challenges and Solutions

### 1.Initial Attempt with Redux npm

- Challenge: Initially attempted to use Redux via npm, but encountered issues because the browser environment did not support the module file types.
- Solution: Decided to use the Redux CDN as an alternative to avoid module compatibility issues.

### 3.Webpack Configuration

- Challenge: Attempted to configure Webpack for the project, but faced difficulties with setting up the server and configuring the build process correctly.
- Solution: Due to these challenges, fallback to using the Redux CDN provided a more straightforward setup, allowing for a simpler integration.

### 3.Final Solution with Redux CDN

- Outcome: By using the Redux CDN, the project was able to run successfully without the additional complexity of Webpack or Vite configurations.
