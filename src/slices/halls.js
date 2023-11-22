import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	hall: [{}],
	selectedHallId: -1
};

const hallsSlice = createSlice({
	name: 'slices',
	initialState,
	reducers: {
		hallSelecting: (state, action) => {
			state.hall = action.payload;
		}
	}
});

const {actions, reducer} = hallsSlice;

export default reducer;
export const {
	hallSelecting
} = actions;