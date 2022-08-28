// Redux store and redux both stand for a container for javascript apps. Stores whole state of the app in an inmutable tree. Multiple stores are possible but not recommended by the creators of redux.

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({

    reducer: {
        
    }
})