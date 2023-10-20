

import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

const Counter = ({ incrFunc, decrFunc, value = 1 }) => {
	return (
		<div className="counter">
			<button className="counter__decr" onClick={decrFunc}>
				<HiOutlineMinus />
			</button>
			<span className="counter__value">{value}</span>
			<button className="counter__incr" onClick={incrFunc}>
				<HiOutlinePlus />
			</button>
		</div>
	);
};

export default Counter;
