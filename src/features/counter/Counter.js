import React from 'react'
// Import Redux Hooks
import { useSelector, useDispatch } from 'react-redux'
// Import our actions we created
import { increment, decrement } from './counterSlice'

const Counter = () => {

  // Add our state tot he component
  const count = useSelector((state) => state.counter.count);
  // Define dispatch
  const dispatch = useDispatch();

  return (
    <section>

    </section>
  )
}

export default Counter