import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tickets: [],
	selectedTickets: [],
	userTickets: []
};

const ticketsSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {
		ticketsFetched: (state, action) => {
			state.tickets = action.payload;
		},
		ticketsSelected: (state, action) => {
			const index = state.selectedTickets.findIndex(ticket => ticket.index === action.payload.index); //проверка на повторение элементе

			if (index !== -1) {
				state.selectedTickets.splice(index, 1);
			} else {
				state.selectedTickets.push(action.payload);
			}
		},
		ticketsSelectedReset: (state) => {
			state.selectedTickets = [];
		},
		setUserTickets: (state, action) => {
			state.userTickets = action.payload;
		}
	}
});

const { actions, reducer } = ticketsSlice;

export default reducer;
export const {
	ticketsFetched,
	ticketsSelected,
	ticketsSelectedReset,
	setUserTickets
} = actions;