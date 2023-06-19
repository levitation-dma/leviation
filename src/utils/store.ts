import { configureStore } from "@reduxjs/toolkit";
import  addressSliceReducer  from "./slices/addressSlice";
import  stepSliceReducer  from "./slices/stepSlice";
import userSliceReducer from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        address:addressSliceReducer,
        step:stepSliceReducer,
        auth:userSliceReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;