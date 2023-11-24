import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	halls: [{}], //пока не использую
	selectedHallName: ''
};

const hallsSlice = createSlice({
	name: 'halls',
	initialState,
	reducers: {
		hallsFetched: (state, action) => {
			state.halls = action.payload;
		},
		hallSelected: (state, action) => {
			state.selectedHallName = action.payload;
		}
	}
});

const {actions, reducer} = hallsSlice;

export default reducer;
export const {
	hallsFetched,
	hallSelected
} = actions;