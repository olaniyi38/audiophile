import { HiOutlineChevronRight } from "react-icons/hi2";

import Link from "next/link";
import Image from "next/image";

const CategoryListItem = ({ title }) => {
	return (
		<div className="category">
			<div className="category__img">
				<Image src={`/images/categories/${title}.webp`} fill alt={title} />
			</div>
			<div className="category__content">
				<div className="category__title">{title}</div>
				<Link href={"/categories/" + title.toLowerCase()} className="category__link">
					<span>shop</span>
					<HiOutlineChevronRight className="chev-right-icn" />
				</Link>
			</div>
		</div>
	);
};

export default CategoryListItem;
