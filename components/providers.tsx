"use client";

import { I18nProvider } from "react-aria";

import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

import type { ParentComponent } from "@/types/react";

const Locale = createContext<{
	locale: "en" | "cs";
	setLocale: Dispatch<SetStateAction<"en" | "cs">>;
}>({
	locale: "en",
	setLocale: () => {},
});

export function useLocale() {
	return useContext(Locale);
}

export const Providers: ParentComponent = ({ children }) => {
	const [locale, setLocale] = useState<"en" | "cs">("en");

	return (
		<I18nProvider locale={locale}>
			<Locale.Provider
				value={{
					locale,
					setLocale,
				}}
			>
				{children}
			</Locale.Provider>
		</I18nProvider>
	);
};
