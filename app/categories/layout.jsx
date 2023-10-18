import CategoriesList from "../components/CategoriesList";
import Cta from "../components/Cta";

const CategoryLayout = ({ children }) => {
	return (
		<section>
			{children}
			<CategoriesList />
			<Cta />
		</section>
	);
};

export default CategoryLayout;
