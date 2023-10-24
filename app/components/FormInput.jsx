import React from "react";

const FormInput = ({
	label,
	name,
	register,
	additionalClassnames = "",
	errors,
	...inputProps
}) => {
	
	return (
		<div className={`form-input ${additionalClassnames}`}>
			<label className="form-input__label" htmlFor={`#form-${label}`}>
				{label}
			</label>
			<input
				{...(register && register(name.toLowerCase(), { required: true }))}
				aria-invalid={errors[name.toLowerCase()] ? "true" : "false"}
				{...inputProps}
			/>
		</div>
	);
};

export default FormInput;
