"use client";

import Image from "next/image";
import {
	clearCart,
	selectCartItems,
	selectCartTotal,
} from "../features/cart/cartSlice";
import Button, { BUTTON_VARIANTS } from "./Button";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import products from "../data/products.json";
import Link from "next/link";

export const CartEmpty = () => {
	return (
		<div className="cart--empty">
			<div className="cart__empty-img">
				<Image
					width={100}
					loading="eager"
					height={100}
					src="/images/empty-cart.webp"
					alt="empty-img"
				/>
			</div>
			<h3>Cart is empty!</h3>
			<p>There is nothing in your cart. Add products to continue</p>
		</div>
	);
};

const Cart = ({ isOpen, closeFunc }) => {
	const cartItems = useSelector(selectCartItems);
	const totalPrice = useSelector(selectCartTotal);
	const dispatch = useDispatch();


	return (
		<div
			className="cart-wrapper"
			onClick={(e) => {
				if (e.target !== e.currentTarget) return;
				closeFunc();
			}}
		>
			<div className={`cart ${isOpen ? "active" : ""}`}>
				{cartItems.length > 0 ? (
					<>
						<div className="cart__header">
							<span>Cart ({cartItems.length})</span>
							<button onClick={() => dispatch(clearCart())}>Remove all</button>
						</div>
						<div className="cart__items">
							{cartItems.map((d) => (
								<CartItem key={d.id} data={d} />
							))}
						</div>
						<div className="cart__footer">
							<div className="cart__total">
								<span>Total</span>
								<span className="value">$ {totalPrice.toLocaleString()}</span>
							</div>

							<Button variant={BUTTON_VARIANTS.orange}>
								<Link href="/checkout">Checkout</Link>
							</Button>
						</div>
					</>
				) : (
					<CartEmpty />
				)}
			</div>
		</div>
	);
};

export default Cart;

{
	/*  */
}
