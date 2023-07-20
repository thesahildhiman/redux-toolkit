import { increByAmount, increment, decrement } from "./redux/counter";
import { useDispatch, useSelector } from "react-redux";

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
