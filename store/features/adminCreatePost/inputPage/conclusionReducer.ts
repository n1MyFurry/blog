import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    conclusion: string;
}

const initialState = {
    conclusion: ""
} as initialState

export const adminPostInputConclusion = createSlice({
    name: "adminPostInputConclusion",
    initialState,
    reducers: {
        getconclusion: () => {
            return initialState;
        },
        setConclusion: (state, action: PayloadAction<string>) => {
            return {
                conclusion: action.payload
            }
        }
    }
});

export const { getconclusion, setConclusion } = adminPostInputConclusion.actions;
export default adminPostInputConclusion.reducer;