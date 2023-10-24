import { FiCircle } from "react-icons/fi";

const FormRadio = ({ label, name, value, register, errors, ...inputProps }) => {
	return (
		<div className="radio">
			<label aria-invalid={errors[name.toLowerCase()] ? "true" : "false"}>
				<span className="radio-icon">
					<FiCircle />
				</span>
				<input
					type="radio"
					{...(register && register(name.toLowerCase(), { required: true }))}
					value={value}
					{...inputProps}
				/>
				<span>{label}</span>
			</label>
		</div>
	);
};

export default FormRadio;
