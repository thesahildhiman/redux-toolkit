import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

// slices are effiecient way which removes complex logic to create actions and reducers
// no  need to create actions and reducers seperately
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increByAmount, increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
