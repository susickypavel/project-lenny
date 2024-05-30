"use client";

import { I18nProvider } from "react-aria";

import type { ParentComponent } from "@/types/react";

export const Providers: ParentComponent = ({ children }) => {
	return <I18nProvider>{children}</I18nProvider>;
};
