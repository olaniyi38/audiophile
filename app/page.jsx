import React from "react";
import Hero from "./components/Hero";
import CategoriesList from "./components/CategoriesList";
import FeaturedProducts from "./components/FeaturedProducts";
import Cta from "./components/Cta";

const Home = () => {
	return (
		<section className="home">
			<Hero />
			<CategoriesList />
			<FeaturedProducts />
			<Cta />
		</section>
	);
};

export default Home;
