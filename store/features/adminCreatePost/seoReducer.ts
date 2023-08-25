import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    seo: string;
}

const initialState = {
    seo: "new"
} as initialState

export const adminPostSeo = createSlice({
    name: "adminPostSeo",
    initialState,
    reducers: {
        getSeo: () => {
            return initialState;
        },
        setSeo: (state, action: PayloadAction<string>) => {
            return {
                seo: action.payload
            }
        }
    }
});

export const { getSeo, setSeo } = adminPostSeo.actions;
export default adminPostSeo.reducer;