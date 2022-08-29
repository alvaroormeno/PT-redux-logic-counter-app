// Redux store and redux both stand for a container for javascript apps. Stores whole state of the app in an inmutable tree. Multiple stores are possible but not recommended by the creators of redux.

import { configureStore } from "@reduxjs/toolkit";

// Import our reducer - We will name it CounterReducer
import counterReducer from '../features/counter/counterSlice.js'

export const store = configureStore({

    reducer: {
        // Add our counterReducer
        // Once here it is available to the whole app via the Provider in index.js
        counter: counterReducer,

    }
})