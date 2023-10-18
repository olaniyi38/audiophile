import Image from "next/image";
import Button, { BUTTON_VARIANTS } from "./Button";
import Link from "next/link";

const Product = ({ data }) => {
	const { slug, name, image, description, new: isNew } = data;
	return (
		<div className="product">
			<div className="product__img">
				<Image
					src={image.desktop}
					loading="eager"
					width={300}
					height={300}
					alt={name}
				/>
			</div>
			<div className="product__content">
				{isNew && <p className="new">new product</p>}
				<h3 className="product__name">{name}</h3>
				<p className="product__description">{description}</p>
				<Link href={"/product/" + slug}>
					<Button variant={BUTTON_VARIANTS.orange}>see product</Button>
				</Link>
			</div>
		</div>
	);
};

export default Product;
