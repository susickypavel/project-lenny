"use client";

import { Button } from "@/aria/Button";

export default function Home() {
	return (
		<main className="flex items-center justify-center h-screen">
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
