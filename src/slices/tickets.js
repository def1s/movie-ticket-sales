import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tickets: [],
	selectedTickets: []
};

const ticketsSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {
		ticketsFetched: (state, action) => {
			state.tickets = action.payload;
		},
		ticketsSelected: (state, action) => {
			state.selectedTickets.push(action.payload);
		},
		ticketsSelectedReset: (state) => {
			state.selectedTickets = [];
		}
	}
});

const { actions, reducer } = ticketsSlice;

export default reducer;
export const {
	ticketsFetched,
	ticketsSelected,
	ticketsSelectedReset
} = actions;