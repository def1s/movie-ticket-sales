import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuth: true
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setIsAuth: (state, action) => {
			state.isAuth = action.payload;
		}
	}
});

const { actions, reducer } = authSlice;

export default reducer;
export const {
	setIsAuth
} = actions;