import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    check: string;
}

const initialState = {
    check: "new"
} as initialState

export const adminPostCheck = createSlice({
    name: "adminPostCheck",
    initialState,
    reducers: {
        getCheck: () => {
            return initialState;
        },
        setCheck: (state, action: PayloadAction<string>) => {
            return {
                check: action.payload
            }
        }
    }
});

export const { getCheck, setCheck } = adminPostCheck.actions;
export default adminPostCheck.reducer;