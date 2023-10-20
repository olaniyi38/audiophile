import Image from "next/image";
import Link from "next/link";
import Button, { BUTTON_VARIANTS } from "./Button";

const ProductOther = ({ data }) => {
	const { name, slug, image } = data;
	return (
		<div className="product-other">
			<div className="product-other__img">
				<Image src={image.desktop} width={150} height={150} alt={name} />
			</div>
			<p className="product-other__name">{name}</p>
			<Link href={"/products/" + slug}>
				<Button variant={BUTTON_VARIANTS.orange}>See product</Button>
			</Link>
		</div>
	);
};

export default ProductOther;
