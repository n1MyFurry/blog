import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    theme: string;
}

const initialState = {
    theme: "new"
} as initialState

export const adminPostTheme = createSlice({
    name: "adminPostTheme",
    initialState,
    reducers: {
        getTheme: () => {
            return initialState;
        },
        setTheme: (state, action: PayloadAction<string>) => {
            return {
                theme: action.payload
            }
        }
    }
});

export const { getTheme, setTheme } = adminPostTheme.actions;
export default adminPostTheme.reducer;