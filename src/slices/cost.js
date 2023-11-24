import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalCost: 0,
	currentSeatCost: 0
}

const costSlice = createSlice({
	name: 'cost',
	initialState,
	reducers: {
		setSeatCost: (state, action) => {
			state.currentSeatCost = action.payload;
		}
	}
});

const { actions, reducer } = costSlice;

export default reducer;
export const {
	setSeatCost
} = actions;