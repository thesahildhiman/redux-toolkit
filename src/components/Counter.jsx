import { useDispatch, useSelector } from "react-redux";
// import { increByAmount, increment, decrement } from "./redux/counter";
import { increByAmount, increment, decrement } from "../slices/counter"; // import from slice

const Counter = () => {
  const counterState = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increByAmount(2))}>+2</button>
      <br />
      {counterState}
    </>
  );
};

export default Counter;
