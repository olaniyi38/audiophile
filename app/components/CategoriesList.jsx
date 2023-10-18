import CategoryListItem from "./CategoryListItem";


const CategoriesList = () => {
	const categories = ["earphones","speakers","headphones"]
    

	return (
		<section className="categories">
			<div className="categories__container">
				{categories.map((c) => (
					<CategoryListItem key={c} title={c} />
                     
				))}
			</div>
		</section>
	);
};

export default CategoriesList;
