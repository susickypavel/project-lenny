"use client";

import { Button } from "@/aria/Button";
import { useDateFormatter } from "react-aria";

export default function Home() {
	let formatter = useDateFormatter();

	return (
		<main className="flex items-center justify-center h-screen">
			<p>{formatter.format(new Date())}</p>
			<Button
				onPress={() => {
					console.log("XD");
				}}
			>
				Hello, World!
			</Button>
		</main>
	);
}
