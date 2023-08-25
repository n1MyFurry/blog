import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    keywords: Array<string>;
}

const initialState = {
    keywords: []
} as initialState

export const adminPostKeywords = createSlice({
    name: "adminPostKeywords",
    initialState,
    reducers: {
        getKeywords: () => {
            return initialState;
        },
        setKeywords: (state, action: PayloadAction<Array<string>>) => {
            return {
                keywords: action.payload
            }
        }
    }
});

export const { getKeywords, setKeywords } = adminPostKeywords.actions;
export default adminPostKeywords.reducer;