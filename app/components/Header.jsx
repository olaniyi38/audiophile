"use client";

import Link from "next/link";
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import Cart from "./Cart";
import { useState } from "react";

const Header = ({ sticky = false }) => {
	const LINKS = [
		{
			title: "headphones",
			url: "/categories/headphones",
		},
		{
			title: "speakers",
			url: "/catgories/speakers",
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
					<Link key={title + "header"} href={url}>
						{title}
					</Link>
				))}
			</nav>
		);
	};

	const [isCartOpen, setCartOpen] = useState(false);

	return (
		<>
			<header className={`header ${sticky ? "header--sticky" : ""}`}>
				<div className="header__container">
					<button className="toggle">
						<HiBars3 className="bars-icn" />
					</button>
					<Link href="/" className="header__title">
						audiophile
					</Link>
					<NavLinks />
					<button onClick={() => setCartOpen(!isCartOpen)} className="cart">
						<HiOutlineShoppingCart className="cart-icn" />
					</button>
				</div>
			</header>
			{isCartOpen && <Cart isOpen={isCartOpen} />}
		</>
	);
};

export default Header;
