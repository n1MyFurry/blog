import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    node: string;
}

const initialState = {
    node: "type"
} as initialState

export const adminPostNode = createSlice({
    name: "adminPostNode",
    initialState,
    reducers: {
        getNode: () => {
            return initialState;
        },
        setNode: (state, action: PayloadAction<string>) => {
            return {
                node: action.payload
            }
        }
    }
});

export const { getNode, setNode } = adminPostNode.actions;
export default adminPostNode.reducer;