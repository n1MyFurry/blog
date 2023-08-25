import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    input: string;
}

const initialState = {
    input: "new"
} as initialState

export const adminPostInput = createSlice({
    name: "adminPostInput",
    initialState,
    reducers: {
        getInput: () => {
            return initialState;
        },
        setInput: (state, action: PayloadAction<string>) => {
            return {
                input: action.payload
            }
        }
    }
});

export const { getInput, setInput } = adminPostInput.actions;
export default adminPostInput.reducer;