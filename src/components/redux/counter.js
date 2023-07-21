// import { createAction, createReducer } from "@reduxjs/toolkit";

// // action generators
// const increment = createAction("counter/increment");
// const decrement = createAction("counter/decrement");
// const increByAmount = createAction("counter/increByAmount");

// // initial state
// const initialState = { value: 0 };

// // reducer
// const counterReducer = createReducer(initialState, (builder) => {
//   builder.addCase(increment, (state) => {
//     state.value++;
//     // state is reducr's state
//     // return is not required
//     // state seems to mutated but it's not
//     // immer library
//   });

//   builder.addCase(decrement, (state) => {
//     state.value--;
//   });

//   builder.addCase(increByAmount, (state, action) => {
//     state.value += action.payload;
//   });
// });

// export { increByAmount, increment, decrement };
// export default counterReducer;
