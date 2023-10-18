import Image from "next/image";
import Button, { BUTTON_VARIANTS } from "./Button";

const Hero = () => {
	return (
		<section className="home-hero">
			<div className="home-hero__container ">
				<div>
					<hgroup className="home-hero__titles">
						<h3>new product</h3>
						<h1>xx00 mark II headphones</h1>
					</hgroup>
					<p className="home-hero__text">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<Button variant={BUTTON_VARIANTS.orange}>See product</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
