"use client";

import GoBack from "../components/GoBack";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import FormRadio from "../components/FormRadio";
import { RiHandCoinFill } from "react-icons/ri";
import CheckoutSummary from "../components/CheckoutSummary";
import OrderSuccessModal from "../components/OrderSuccessModal";
import { useState } from "react";

const CheckoutPage = () => {
	const { register, watch, handleSubmit, formState } = useForm();

	const [success, setSuccess] = useState(false);

	const errors = formState.errors;

	const paymentMethod = watch("payment_method");

	return (
		<section className="checkout">
			{success && <OrderSuccessModal />}
			<div className="checkout__container">
				<GoBack />
				<form className="checkout__form">
					<h1 className="checkout__title">Checkout</h1>

					<div className="checkout__form-group  form-group--billing">
						<h3 className="checkout__form-title">billing details</h3>
						<div>
							<FormInput
								name="name"
								label="name"
								register={register}
								type="text"
								placeholder="John doe"
								errors={errors}
							/>
							<FormInput
								name="email"
								label="email"
								register={register}
								type="email"
								placeholder="JohnDoe12@gmail.com"
								errors={errors}
							/>
							<FormInput
								name="phone_number"
								label="number"
								register={register}
								type="number"
								placeholder="+2349053122"
								errors={errors}
							/>
						</div>
					</div>
					<div className="checkout__form-group form-group--shipping">
						<h3 className="checkout__form-title">shipping info</h3>
						<div>
							<FormInput
								name="address"
								label="address"
								register={register}
								type="text"
								placeholder="1137 williams avenue"
								additionalClassnames="span-2"
								errors={errors}
							/>
							<FormInput
								name="zipcode"
								label="zip code"
								register={register}
								type="number"
								placeholder="10001"
								errors={errors}
							/>
							<FormInput
								name="city"
								label="city"
								register={register}
								type="text"
								placeholder="lagos"
								errors={errors}
							/>
							<FormInput
								name="country"
								label="country"
								register={register}
								type="text"
								placeholder="nigeria"
								errors={errors}
							/>
						</div>
					</div>
					<div className="checkout__form-group form-group--payment">
						<h3 className="checkout__form-title">payment details</h3>
						<div>
							<h5>Payment method</h5>
							<div className="methods">
								<FormRadio
									label={"e-money"}
									name={"payment_method"}
									value={"e-money"}
									register={register}
									errors={errors}
								/>
								<FormRadio
									label={"cash on delivery"}
									name={"payment_method"}
									value={"cash"}
									register={register}
									errors={errors}
								/>
							</div>
						</div>
						{paymentMethod === "cash" && (
							<div className="method-cash">
								<RiHandCoinFill />
								<p>
									The ‘Cash on Delivery’ option enables you to pay in cash when
									our delivery courier arrives at your residence. Just make sure
									your address is correct so that your order will not be
									cancelled.
								</p>
							</div>
						)}
						{paymentMethod === "e-money" && (
							<div className="method-e-money">
								<FormInput
									label="e-Money Number"
									name="e_money_number"
									register={register}
									type="number"
									placeholder="2387119"
									errors={errors}
								/>
								<FormInput
									label="e-Money pin"
									name="e_money_pin"
									register={register}
									type="number"
									placeholder="2212"
									errors={errors}
								/>
							</div>
						)}
					</div>
				</form>
				<CheckoutSummary setSuccess={setSuccess} handleSubmit={handleSubmit} />
			</div>
		</section>
	);
};

export default CheckoutPage;
