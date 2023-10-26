import {
	AiFillFacebook,
	AiOutlineTwitter,
	AiOutlineInstagram,
} from "react-icons/ai";
import FooterLInks from "./FooterLInks";

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

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__header">
					<h1 className="footer__title">audiophile</h1>

					<div className="footer__links">
						<FooterLInks links={LINKS} />
					</div>
				</div>

				<div className="footer__text">
					Audiophile is an all in one stop to fulfill your audio needs. We're a
					small team of music lovers and sound specialists who are devoted to
					helping you get the most out of personal audio. Come and visit our
					demo facility - we’re open 7 days a week.
				</div>

				<aside className="footer__aside">
					<p>Copyright 2021. All Rights Reserved</p>
					<div className="footer__socials">
						<AiFillFacebook />
						<AiOutlineTwitter />
						<AiOutlineInstagram />
					</div>
				</aside>
			</div>
		</footer>
	);
};

export default Footer;
