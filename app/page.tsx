"use client";

import { useDateFormatter } from "react-aria";

import { useLocale } from "@/components/providers";
import { Select, SelectItem } from "@/aria/Select";

export default function Home() {
	const { locale, setLocale } = useLocale();
	let formatter = useDateFormatter();

	return (
		<main className="flex items-center justify-center h-screen">
			<p>{formatter.format(new Date())}</p>
			<Select
				label="Language"
				defaultSelectedKey={locale}
				onSelectionChange={(key) => {
					if (key === "en" || key === "cs") {
						setLocale(key);
					}
				}}
			>
				<SelectItem id="en">English</SelectItem>
				<SelectItem id="cs">Czech</SelectItem>
			</Select>
		</main>
	);
}
