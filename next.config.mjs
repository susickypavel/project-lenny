import optimizeLocales from "@react-aria/optimize-locales-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.plugins.push(
			optimizeLocales.webpack({
				locales: ["en-US", "cs-CZ"],
			})
		);
		return config;
	},
};

export default nextConfig;
