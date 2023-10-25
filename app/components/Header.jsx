"use client";

import Link from "next/link";
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import Cart from "./Cart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cart/cartSlice";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = ({ sticky = false }) => {
	const path = usePathname();
	console.log(path);
	const LINKS = [
		{
			title: "home",
			url: "/",
		},
		{
			title: "headphones",
			url: "/categories/headphones",
		},
		{
			title: "speakers",
			url: "/categories/speakers",
		},
		{
			title: "earphones",
			url: "/categories/earphones",
		},
	];

	const NavLinks = () => {
		return (
			<nav className="header__nav">
				{LINKS.map(({ title, url }) => (
					<Link
						onClick={() => setCartOpen(false)}
						key={title + "header"}
						href={url}
						className={`header__nav-link ${url === path ? "active" : ""}`}
					>
						{title}
					</Link>
				))}
			</nav>
		);
	};

	const [isCartOpen, setCartOpen] = useState(false);
	const [isMobileNavActive, setMobileNavActive] = useState(false);
	const cartItemsCount = useSelector(selectCartCount);

	return (
		<>
			<header className={`header ${sticky ? "header--sticky" : ""}`}>
				<div className="header__container">
					<button
						onClick={() => setMobileNavActive(!isMobileNavActive)}
						className="toggle"
					>
						<HiBars3 className="bars-icn" />
					</button>
					<Link
						onClick={() => {
							setCartOpen(false);
							setMobileNavActive(false);
						}}
						href="/"
						className="header__title"
					>
						audiophile
					</Link>
					<NavLinks />
					<button
						onClick={() => {
							setMobileNavActive(false);
							setCartOpen(!isCartOpen);
						}}
						className="cart"
					>
						{cartItemsCount > 0 && <span className="active"></span>}
						<HiOutlineShoppingCart className="cart-icn" />
					</button>
				</div>
			</header>

			<Cart isOpen={isCartOpen} closeFunc={() => setCartOpen(false)} />

			<MobileNav isActive={isMobileNavActive} />
		</>
	);
};

export default Header;
