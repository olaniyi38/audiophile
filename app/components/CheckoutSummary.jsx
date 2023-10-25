import { usePaystackPayment } from "react-paystack";
import {
	clearCart,
	selectCartItems,
	selectCartTotal,
} from "../features/cart/cartSlice";
import generateUuid from "../helpers/generateUuid";
import Button, { BUTTON_VARIANTS } from "./Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { CartEmpty } from "./Cart";

const CheckoutSummary = ({ handleSubmit, setSuccess }) => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	const dispatch = useDispatch();
	const shipping = 50;
	const vat = 2099;

	const grandTotal = cartTotal + shipping + vat;

	const paymentConfig = {
		reference: generateUuid(),
		email: "user@example.com",
		amount: grandTotal * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
		publicKey: "pk_test_dbf2e4120c9e5038f31064a2e0e67e1f2e9929b0",
		currency: "NGN",
	};

	const onSuccess = (reference) => {
		// Implementation for whatever you want to do with reference and after success call.
		setSuccess(true);
		dispatch(clearCart());
		console.log(reference);
	};

	// you can call this function anything
	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};
	const initalizePayment = usePaystackPayment(paymentConfig);

	function onSubmitHandler(data) {
		console.log(data);
		initalizePayment(onSuccess, onClose);
	}

	return (
		<div className="checkout__summary">
			{cartItems.length > 0 ? (
				<>
					<h1>Summary</h1>
					<div className="checkout__cart">
						{cartItems.map((item) => (
							<CartItem data={item} checkout={true} />
						))}
					</div>
					<div className="checkout__pay">
						<div className="checkout__pay-details">
							<p className="checkout__pay-detail">
								<span>Total</span>
								<span>${cartTotal.toLocaleString()}</span>
							</p>
							<p className="checkout__pay-detail">
								<span>shipping</span>
								<span>${shipping.toLocaleString()}</span>
							</p>
							<p className="checkout__pay-detail">
								<span>vat (included)</span>
								<span>${vat.toLocaleString()}</span>
							</p>
						</div>

						<p className="checkout__pay-detail">
							<span>Grand total</span>
							<span className="grand-total">
								$ {grandTotal.toLocaleString()}
							</span>
						</p>
						<Button
							onClickFunc={handleSubmit(onSubmitHandler)}
							variant={BUTTON_VARIANTS.orange}
						>
							continue & pay
						</Button>
					</div>
				</>
			) : (
				<>
					<CartEmpty />
				</>
			)}
		</div>
	);
};

export default CheckoutSummary;
