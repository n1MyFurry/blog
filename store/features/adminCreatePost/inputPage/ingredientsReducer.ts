import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    ingredients: Array<string>;
}

const initialState = {
    ingredients: []
} as initialState

export const adminPostInputIngredients = createSlice({
    name: "adminPostInputIngredients",
    initialState,
    reducers: {
        getIngredients: () => {
            return initialState;
        },
        setIngredients: (state, action: PayloadAction<Array<string>>) => {
            return {
                ingredients: action.payload
            }
        }
    }
});

export const { getIngredients, setIngredients } = adminPostInputIngredients.actions;
export default adminPostInputIngredients.reducer;