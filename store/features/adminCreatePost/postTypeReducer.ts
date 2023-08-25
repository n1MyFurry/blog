import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    type: string;
}

const initialState = {
    type: "none"
} as initialState

export const adminPostType = createSlice({
    name: "adminPostType",
    initialState,
    reducers: {
        getType: () => {
            return initialState;
        },
        setType: (state, action: PayloadAction<string>) => {
            return {
                type: action.payload
            }
        }
    }
});

export const { getType, setType } = adminPostType.actions;
export default adminPostType.reducer;