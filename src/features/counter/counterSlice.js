// Note: Slice comes from splitting redux state objects into multiple slices of state. A slice is a collection of reducers logic and actions for a single feature in the app. For example a Blog Project might have a slice for posts and another for comments. you will handle the logic for each differently so each gets its own slice.

// Start slice by importing createSlice
import { createSlice } from "@reduxjs/toolkit";

// Create an initial state
const initialState = {
    count: 0
}

// Create the Counter Slice with 3 parameters
export const counterSlice = createSlice({
    // Parameter 1 -> Slice name, used in action types
    name: 'counter',
    // Parameter 2 -> The iniitial state for the reducer
    initialState,
    // Parameter 3 -> Reducers object of "case reducers" / Here we name our different actions
    reducers: {
        // Action 1 ->  Increment, has a anonymous function which receieves the state. 
        // Inside we have the state.count which is defined above in the initial state in which we add 1 to the total.
        increment: (state) => {
            state.count += 1;
        },
        // Action 2 -> Decrement, complete opposite of action 1
        decrement: (state) => {
            state.count -= 1;
        },
        // Action 3 -> Reset, reset the count to 0
        reset: (state) => {
            state.count = 0
        },
        // Action 4 -> Increment by Amount, 
        // Takes the state and an action, we will add to the original count state a specific amount which will be received by a payload in an action.
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
        
    }
});


// Export both actions and reducers
// Destructure the actions from counterSlice.actions
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
// Export the full reducer we created which will be needed by the store. 
export default counterSlice.reducer;


