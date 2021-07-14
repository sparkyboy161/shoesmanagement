import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
    name: 'theme',
    initialState: {},
    reducers: {
        setMode: (state, action) => {
            return { ...state, mode: action.payload }
        },
        setColor: (state, action) => {
            return { ...state, color: action.payload }
        },
    }
})

const { reducer, actions } = theme;
export const { setMode, setColor } = actions;
export default reducer;