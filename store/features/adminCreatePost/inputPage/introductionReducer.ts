import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    introduction: string;
}

const initialState = {
    introduction: ""
} as initialState

export const adminPostInputIntroduction = createSlice({
    name: "adminPostInputIntroduction",
    initialState,
    reducers: {
        getIntroduction: () => {
            return initialState;
        },
        setIntroduction: (state, action: PayloadAction<string>) => {
            return {
                introduction: action.payload
            }
        }
    }
});

export const { getIntroduction, setIntroduction } = adminPostInputIntroduction.actions;
export default adminPostInputIntroduction.reducer;