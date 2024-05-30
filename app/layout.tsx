import { Document } from "@/components/document";

import type { Metadata } from "next";
import type { ParentComponent } from "@/types/react";

import "./globals.css";

export const metadata: Metadata = {
	title: "Project Lenny",
};

const RootLayout: ParentComponent = ({ children }) => {
	return <Document>{children}</Document>;
};

export default RootLayout;
