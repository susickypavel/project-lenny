"use client";

import { useLocale } from "react-aria";

import type { ParentComponent } from "@/types/react";

export const Document: ParentComponent = ({ children }) => {
	const { direction, locale } = useLocale();

	return (
		<html lang={locale} dir={direction}>
			<body>{children}</body>
		</html>
	);
};
