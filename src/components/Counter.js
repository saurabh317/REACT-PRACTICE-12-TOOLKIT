 import classes from './Counter.module.css';
 import { useSelector , useDispatch} from "react-redux";
 import {CounterActions} from "../store/store"

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.counter);
  const show  = useSelector(state => state.showToggle)

  const toggleCounterHandler = () => {
    // dispatch({type : "toggle"})
    dispatch(CounterActions.toggle())
  }
  const increamentHandler = () =>{
    // dispatch({type : "increment"})
    dispatch(CounterActions.increment())

  }
  const decreamentHandler = () =>{
    // dispatch({type : "decrement"})
    dispatch(CounterActions.decrement())

  }
  const decreaseHandler = () =>{
    // dispatch({type : "decrease" , payload:10})
    dispatch(CounterActions.decrease(10))

  }
 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterValue}</div>}
      <div>
      <button onClick={increamentHandler}>Increament</button>
      <button onClick={decreamentHandler}>Decreament</button>
      <button onClick={decreaseHandler}>Decrease by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
