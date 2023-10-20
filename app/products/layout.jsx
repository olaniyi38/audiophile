import CategoriesList from "../components/CategoriesList";
import Cta from "../components/Cta";

const ProductPageLayout = ({ children }) => {
	return (
		<section>
			{children}
			<CategoriesList />
			<Cta />
		</section>
	);
};

export default ProductPageLayout;
