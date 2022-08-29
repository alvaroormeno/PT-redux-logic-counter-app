import React from "react";
// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";
// Import our actions we created
import { increment, decrement } from "./counterSlice";

const Counter = () => {
	// Add our state tot he component
	const count = useSelector((state) => state.counter.count);
	// Define dispatch
	const dispatch = useDispatch();

	return (
		<section>
			<p>{count}</p>
            <div>
                {/* Inside of On click, we have an anonimous function. Inside this function we can call dispatch and inside we pass any of the actions we created. */}
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
		</section>
	);
};

export default Counter;
