import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    description: string;
}

const initialState = {
    description: ""
} as initialState

export const adminPostDescription = createSlice({
    name: "adminPostDescription",
    initialState,
    reducers: {
        getDescription: () => {
            return initialState;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            return {
                description: action.payload
            }
        }
    }
});

export const { getDescription, setDescription } = adminPostDescription.actions;
export default adminPostDescription.reducer;