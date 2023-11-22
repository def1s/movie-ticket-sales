import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sessions: [],
	currentSessionId: -1
};

const sessionsSlice = createSlice({
	name: 'sessions',
	initialState,
	reducers: {
		sessionsFetched: (state, action) => {
			state.sessions = action.payload;
		},
		sessionIdSelected: (state, action) => {
			state.currentSessionId = action.payload;
		},
		sessionIdReset: (state) => {
			state.currentSessionId = -1;
		}
	}
});

const {actions, reducer} = sessionsSlice;

export default reducer;
export const {
	sessionsFetched,
	sessionIdSelected,
	sessionIdReset
} = actions;