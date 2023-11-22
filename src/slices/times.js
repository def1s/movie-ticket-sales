import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedTime: 0,
	selectedDate: 0,
	selectedDateIndex: -1
};

const timesSlice = createSlice({
	name: 'times',
	initialState,
	reducers: {
		timeSelecting: (state, action) =>{
			state.selectedTime = action.payload;
		},
		dateSelecting: (state, action) => {
			state.selectedDate = action.payload;
		},
		dateIndexSelecting: (state, action) => {
			state.selectedDateIndex = action.payload;
		}
	}
});

const { actions, reducer } = timesSlice;

export default reducer;
export const {
	timeSelecting,
	dateSelecting,
	dateIndexSelecting
} = actions;