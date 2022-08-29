import React, { useState} from "react";
// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";
// Import our actions we created
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
	// Add our state to the component
	const count = useSelector((state) => state.counter.count);
	// Define dispatch
	const dispatch = useDispatch();


    // State for incrementAmount
    const [incrementAmount, setIncrementAmount] = useState(0);

    // Verify we get a number value
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

	return (
		<section>
			<p>{count}</p>
            <div>
                {/* Inside of On click, we have an anonimous function. Inside this function we can call dispatch and inside we pass any of the actions we created. */}
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input 
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value) }
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
		</section>
	);
};

export default Counter;
