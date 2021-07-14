import { createSlice } from "@reduxjs/toolkit";

const currLogin = localStorage.getItem('isLogin') ? true : false

const auth = createSlice({
    name: 'auth',
    initialState: {
        isLogin: currLogin
    },
    reducers: {
        setLoginSuccess: (state) => {
            return { ...state, isLogin: true }
        },
    }
})

const { reducer, actions } = auth;
export const { setLoginSuccess } = actions;
export default reducer;