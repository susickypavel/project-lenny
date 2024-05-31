import { Document } from "@/components/document";
import { Providers } from "@/components/providers";

import type { Metadata } from "next";
import type { ParentComponent } from "@/types/react";

import "./globals.css";

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
