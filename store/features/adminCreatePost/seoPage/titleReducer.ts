import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    title: string;
}

const initialState = {
    title: ""
} as initialState

export const adminPostTitle = createSlice({
    name: "adminPostTitle",
    initialState,
    reducers: {
        getTitle: () => {
            return initialState;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            return {
                title: action.payload
            }
        }
    }
});

export const { getTitle, setTitle } = adminPostTitle.actions;
export default adminPostTitle.reducer;