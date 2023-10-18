export const BUTTON_VARIANTS = {
	orange: "button--orange",
	dark: "button--dark",
};

const Button = ({ children, onClickFunc, inverted, variant }) => {
	const variantStyles = `${inverted && "button--inverted"} ${
		variant && variant
	}`;

	return (
		<button onClick={onClickFunc} className={`button ${variantStyles}`}>
			{children}
		</button>
	);
};

export default Button;
