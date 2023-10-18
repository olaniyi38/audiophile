"use client"

import { useEffect } from "react";
import { useState } from "react";

function useCounter(initialValue, max = null, min = null) {
	const [count, setCount] = useState(initialValue || 0);

	useEffect(()=>{
		console.log("rendered hook", count)
	},[count])

	const increment = () => {
		if (max) {
			count <= max && setCount((x) => x + 1);
			return;
		}
		setCount((x) => x + 1);
	};
    
	const decrement = () => {
		if (min) {
			count > min && setCount((x) => x - 1);
			return;
		}
		setCount((x) => x - 1);
	};

	const reset = () => setCount(initialValue || 0);

	return {
		count,
		increment,
		decrement,
		reset,
		setCount,
	};
}

export default useCounter;
