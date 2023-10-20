"use client";

import Image from "next/image";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import useCounter from "../hooks/useCounter";
import { removeItem, updateItem } from "../features/cart/cartSlice";
import { useEffect } from "react";

const CartItem = ({ data }) => {
	const { image, shortName, price, qty, id } = data;
	const { increment, decrement, count } = useCounter(qty, null, 1);
	const dispatch = useDispatch();

	function onIncrement() {
		increment();
		dispatch(updateItem({ id, axn: "add" }));
	}

	
	useEffect(() => {
		console.log("count updated cart-item: ", count);
	}, [count]);

	function onDecrement() {
		decrement();
		if (count === 1) {
			dispatch(removeItem({ id }));
			return;
		}
		dispatch(updateItem({ id, axn: "minus" }));
	}

	return (
		<div className="cart-item">
			<div className="cart-item__about">
				<div className="cart-item__img">
					<Image src={image.mobile} width={100} height={100} alt="" />
				</div>
				<div className="cart-item__info">
					<div className="cart-item__name">{shortName}</div>
					<div className="cart-item__price">${price.toLocaleString()}</div>
				</div>
			</div>
			<div className="cart-item__counter">
				<Counter incrFunc={onIncrement} decrFunc={onDecrement} value={count} />
			</div>
		</div>
	);
};

export default CartItem;
