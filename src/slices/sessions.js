import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sessions: []
};

const sessionsSlice = createSlice({
	name: 'sessions',
	initialState,
	reducers: {
		sessionsFetched: (state, action) => {
			state.sessions = action.payload;
		}
	}
});

const {actions, reducer} = sessionsSlice;

export default reducer;
export const {
	sessionsFetched
} = actions;