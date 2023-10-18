"use client";

import Image from "next/image";
import { clearCart, selectCartItems } from "../features/cart/cartSlice";
import Button, { BUTTON_VARIANTS } from "./Button";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import products from "../data/products.json";

const CartEmpty = () => {
	return (
		<div className="cart__empty">
			<div className="cart__empty-img">
				<Image
					width={100}
					loading="eager"
					height={100}
					src="/images/empty-cart.webp"
				/>
			</div>
			<h3>Cart is empty!</h3>
			<p>There is nothing in your cart. Add products to continue</p>
		</div>
	);
};

const Cart = ({ isOpen }) => {
	const cartItems = Object.entries(useSelector(selectCartItems));
	const dispatch = useDispatch();

	const data = cartItems.map(([id, qty]) => {
		const productData = products.find((prd) => prd.id == id);
		const { shortName, image, price } = productData;

		return { shortName, image, price, qty, id };
	});

	const totalPrice = data.reduce((acc, prd) => acc + prd.price * prd.qty, 0);

	return (
		<div className="cart-wrapper">
			<div className={`cart ${isOpen ? "active" : ""}`}>
				{cartItems.length > 0 ? (
					<>
						<div className="cart__header">
							<span>Cart ({cartItems.length})</span>
							<button onClick={() => dispatch(clearCart())}>Remove all</button>
						</div>
						<div className="cart__items">
							{data.map((d) => (
								<CartItem key={d.id} data={d} />
							))}
						</div>
						<div className="cart__footer">
							<div className="cart__total">
								<span>Total</span>
								<span className="value">$ {totalPrice.toLocaleString()}</span>
							</div>
							<Button variant={BUTTON_VARIANTS.orange}>Checkout</Button>
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
