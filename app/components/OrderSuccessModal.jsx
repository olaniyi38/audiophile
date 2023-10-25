"use client";

import { AiFillCheckCircle } from "react-icons/ai";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
	clearCart,
	selectCartItems,
	selectCartTotal,
} from "../features/cart/cartSlice";
import Button, { BUTTON_VARIANTS } from "./Button";
import Link from "next/link";

const OrderSuccessModal = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<div className="order-success">
			<div className="order-success__container">
				<div className="check">
					<AiFillCheckCircle />
				</div>
				<div className="order-success__msg">
					<h1>THANK YOU FOR YOUR ORDER</h1>
					<p>You will receive an email confirmation shortly.</p>
				</div>
				{/* <div className="order-success__order">
					<div className="order__list">
						{cartItems.map((data) => (
							<CartItem checkout data={data} />
						))}
					</div>
					<div className="order__total">
						<h3>Grand total</h3>
						<p>$ {cartTotal}</p>
					</div>
				</div> */}
				<Link href={"/"}>
					<Button variant={BUTTON_VARIANTS.orange}>Back to home</Button>
				</Link>
			</div>
		</div>
	);
};

export default OrderSuccessModal;
