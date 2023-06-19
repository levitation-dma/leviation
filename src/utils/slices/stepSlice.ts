import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface StepState {
    step: number;
}

const initialState:StepState = {
    step: 1,
}



const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        setStep(state, action) {
            state.step = action.payload
        }
    }
})

export const { setStep } = stepSlice.actions

export const selectStep = (state:RootState) => state.step.step

export default stepSlice.reducer