import { Document } from "@/components/document";

import type { Metadata } from "next";
import type { ParentComponent } from "@/types/react";

import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
	title: "Project Lenny",
};

const RootLayout: ParentComponent = ({ children }) => {
	return (
		<Providers>
			<Document>{children}</Document>
		</Providers>
	);
};

export default RootLayout;
