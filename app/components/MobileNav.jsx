import CategoriesList from "./CategoriesList";

const MobileNav = ({ isActive }) => {
	return (
		<div className={`mobile-nav ${isActive ? "active" : ""}`}>
			<div className="mobile-nav__container">
				<CategoriesList />
			</div>
		</div>
	);
};

export default MobileNav;
