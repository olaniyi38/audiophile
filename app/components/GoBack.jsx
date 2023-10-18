"use client";

import { useRouter } from "next/navigation";
import React from "react";

const GoBack = () => {
	const router = useRouter();
	return (
		<button onClick={() => router.back()} className="go-back">
			Go back
		</button>
	);
};

export default GoBack;
