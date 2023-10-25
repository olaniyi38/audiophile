import Product from "../../components/Product";
import products from "../../data/products.json";

const CategoryPage = ({ params }) => {
	const { name: categoryName } = params;

	const categoryItems = products.filter(
		(p) => p.category.toLowerCase() === categoryName.toLowerCase()
	);

	console.log(categoryItems)

	if (categoryItems.length === 0) {
		return <h1>Category not found</h1>;
	}

	return (
		<>
			<h1 className="category-page__title">{categoryName}</h1>
			<div className="category-page">
				<div className="category-page__container">
					<div className="category-page__items">
						{categoryItems.map((data) => (
							<Product key={data.slug + data.name} data={data} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CategoryPage;
