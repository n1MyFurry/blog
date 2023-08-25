import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    maintitle: string;
}

const initialState = {
    maintitle: ""
} as initialState

export const adminPostInputMainTitle = createSlice({
    name: "adminPostInputMainTitle",
    initialState,
    reducers: {
        getMainTitle: () => {
            return initialState;
        },
        setMainTitle: (state, action: PayloadAction<string>) => {
            return {
                maintitle: action.payload
            }
        }
    }
});

export const { getMainTitle, setMainTitle } = adminPostInputMainTitle.actions;
export default adminPostInputMainTitle.reducer;