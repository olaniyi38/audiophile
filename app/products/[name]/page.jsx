import Link from "next/link";
import products from "../../data/products.json";

import Image from "next/image";

import ProductOther from "../../components/ProductOther";
import AddToCart from "../../components/AddToCart";
import GoBack from "../../components/GoBack";
import { toast } from "react-toastify";

const ProductPage = ({ params }) => {
	const { name: productName } = params;
	const productData = products.find(
		(p) => p.slug.toLowerCase() === productName.toLowerCase()
	);

	if (!productData) {
		return <h1 className="product-page__title">Product not found</h1>;
	}

	const {
		name,
		description,
		image,
		price,
		features,
		includes,
		gallery,
		id,
		others,
		new: isNew,
	} = productData;

	return (
		<section className="product-page">
			<div className="product-page__container">
				<GoBack />

				<div className="product">
					<div className="product__img">
						<Image
							src={image.desktop}
							loading="eager"
							width={400}
							height={400}
							alt={name}
						/>
					</div>
					<div className="product__content">
						{isNew && <p className="new">new product</p>}
						<h3 className="product__name">{name}</h3>
						<p className="product__description">{description}</p>
						<p className="product__price">${price}</p>
						<AddToCart id={id} />
					</div>
				</div>
				<div className="product-page__about">
					<div className="product-page__features">
						<h1 className="product-page__title">Features</h1>
						<p>{features}</p>
					</div>

					<div className="product-page__includes">
						<h1 className="product-page__title">In the box</h1>
						<div className="product-page__include-items">
							{includes.map((inc) => (
								<div key={inc.item}>
									<span>{inc.quantity}x</span>
									<span>{inc.item}</span>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="product-page__gallery">
					{Object.entries(gallery).map(([pos, images]) => (
						<div
							key={pos + images.desktop}
							className={`product-page__gallery-image image--${pos}`}
						>
							<Image src={images.mobile} fill alt={name + "image"} />
						</div>
					))}
				</div>

				<div className="product-page__others">
					<h1 className="product-page__title">you may also like</h1>
					<div>
						{others.map((data) => (
							<ProductOther key={data.slug} data={data} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductPage;
