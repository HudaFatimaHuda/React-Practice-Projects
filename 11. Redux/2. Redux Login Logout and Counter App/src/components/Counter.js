import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from '../store/index'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter); 
  const isShown = useSelector(state => state.counter.isShown); 

  // useDispatch do not need any arguments but return a function that can be used to dispatch any function  
  const dispatch = useDispatch(); 

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  const increase = () => {
    dispatch(counterActions.increase(10)) //{type: 'SOME_UNIQUE_IDENTIFIER', payload: 10}
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>{counter}</div>}
      <div> 
      <button onClick={increment}>Increment</button>
      <button onClick={increase}>Increment by 5</button>
      <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
