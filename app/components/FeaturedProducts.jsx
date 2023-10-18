import Image from "next/image";
import Button, { BUTTON_VARIANTS } from "./Button";
import Link from "next/link";
import products from "../data/products.json";

const FeaturedProducts = () => {
	// const featured = ["zx9", "zx7", "yx1"];

	// const data = products.filter((p) => {
	// 	return featured.forEach((f) => {
	// 		console.log(p.shortName === f.toUpperCase());
	// 		return f.toUpperCase() === p.shortName;
	// 	});
	// });

	// console.log(data);

	return (
		<section className="featured-products">
			<div className="featured-products__container">
				<div className="featured-product zx9">
					<div className="featured-product__image">
						<Image src="/images/products/zx9/desktop.webp" fill alt="zx9" />
					</div>
					<div className="featured-product__content">
						<hgroup className="featured-product__title">
							<h1>zx9</h1>
							<h1>speakers</h1>
						</hgroup>
						<div className="featured-product__about">
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</div>
						<Link href="/product/zx9-speakers">
							<Button variant={BUTTON_VARIANTS.dark}>see product</Button>
						</Link>
					</div>
				</div>
				<div className="featured-product zx7">
					<div className="featured-product__content">
						<h1 className="featured-product__title">zx7 speaker</h1>
						<Link href="/product/zx7-speakers">
							<Button>see product</Button>
						</Link>
					</div>
				</div>
				<div className="featured-product yx1">
					<div className="featured-product__image"></div>
					<div className="featured-product__content">
						<h1 className="featured-product__title">yx1 earphones</h1>
						<Link href="/product/yx1-earphones">
							<Button>see product</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
