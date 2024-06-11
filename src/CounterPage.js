import React from 'react';
import { decrement, increment } from './Counter';
import { useDispatch, useSelector } from 'react-redux';

export default function CounterPage() {
    const dispatch = useDispatch();

    const count = useSelector((state) => {
        console.log(state)
        return state.count.count
    })

  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}
