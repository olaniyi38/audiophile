import Image from "next/image";
import Button, { BUTTON_VARIANTS } from "./Button";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="home-hero">
			<link
				rel="preload"
				as="image"
				imageSrcSet="/hero-bg-desktop.webp"
				href=""
			/>
			<link
				rel="preload"
				as="image"
				imageSrcSet="/hero-bg-tablet.webp"
				href=""
			/>
			<link
				rel="preload"
				as="image"
				imageSrcSet="/hero-bg-mobile.webp"
				href=""
			/>
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
					<Link href="/products/xx99-mark-two-headphones">
						<Button variant={BUTTON_VARIANTS.orange}>See product</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
