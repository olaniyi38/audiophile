"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterLInks = ({ links }) => {
	const path = usePathname();
	console.log(path);
	return links.map(({ url, title }) => (
		<Link
			key={title + "footer"}
			href={url}
			className={`footer__footer-link ${url === path ? "active" : ""}`}
		>
			{title}
		</Link>
	));
};

export default FooterLInks;
