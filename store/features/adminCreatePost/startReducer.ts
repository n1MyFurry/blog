import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    start: boolean;
}

const initialState = {
    start: false
} as initialState

export const adminPostStart = createSlice({
    name: "adminPostStart",
    initialState,
    reducers: {
        getStart: () => {
            return initialState;
        },
        setStart: (state, action: PayloadAction<boolean>) => {
            return {
                start: action.payload
            }
        }
    }
});

export const { getStart, setStart } = adminPostStart.actions;
export default adminPostStart.reducer;