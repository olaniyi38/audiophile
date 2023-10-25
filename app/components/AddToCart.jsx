"use client";

import Counter from "./Counter";
import Button, { BUTTON_VARIANTS } from "./Button";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import useCounter from "../hooks/useCounter";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AddToCart = ({ id }) => {
	const dispatch = useDispatch();

	const { increment, decrement, count, reset } = useCounter(1, null, 1);

	useEffect(() => {
		console.log("count updated ad-to-cart: ", count);
	}, [count]);

	function addItemToCart() {
		dispatch(addItem({ id, qty: count }));
		toast.success(`added ${count} item(s) to cart`);
	}

	return (
		<div className="product__actions">
			<Counter incrFunc={increment} decrFunc={decrement} value={count} />
			<Button onClickFunc={addItemToCart} variant={BUTTON_VARIANTS.orange}>
				add to cart
			</Button>
		</div>
	);
};

export default AddToCart;
