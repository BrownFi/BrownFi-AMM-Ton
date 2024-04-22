import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

/** @type {import('vite').UserConfig} */
export default ({ mode }) => {
	return defineConfig({
		plugins: [react(), nodePolyfills()],
	});
};
