import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    maindescription: string;
}

const initialState = {
    maindescription: ""
} as initialState

export const adminPostInputMainDescription = createSlice({
    name: "adminPostInputMainDescription",
    initialState,
    reducers: {
        getMainDescription: () => {
            return initialState;
        },
        setMainDescription: (state, action: PayloadAction<string>) => {
            return {
                maindescription: action.payload
            }
        }
    }
});

export const { getMainDescription, setMainDescription } = adminPostInputMainDescription.actions;
export default adminPostInputMainDescription.reducer;