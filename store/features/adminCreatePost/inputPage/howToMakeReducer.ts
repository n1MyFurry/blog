import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    howtomake: string;
}

const initialState = {
    howtomake: ""
} as initialState

export const adminPostInputHowToMake = createSlice({
    name: "adminPostInputHowToMake",
    initialState,
    reducers: {
        getHowToMake: () => {
            return initialState;
        },
        setHowToMake: (state, action: PayloadAction<string>) => {
            return {
                howtomake: action.payload
            }
        }
    }
});

export const { getHowToMake, setHowToMake } = adminPostInputHowToMake.actions;
export default adminPostInputHowToMake.reducer;