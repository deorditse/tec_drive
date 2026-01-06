import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import pkg from "./package.json";
import type { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
    const mode = env.mode || "development";

    const _isProd = mode === "production";
    const apiUrl = env.apiUrl || "http://localhost:8000";

    return defineConfig({
        plugins: [
            react(),
            svgr({
                include: "**/*.svg",

                svgrOptions: {
                    exportType: "default",
                    icon: true,
                },
            }),
        ],
        resolve: {
            alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
        },
        define: {
            __IS_DEV__: JSON.stringify(!_isProd),
            __API__: JSON.stringify(apiUrl),
            __VERSION__: JSON.stringify(pkg.version),
        },
        css: {
            modules: {
                exportGlobals: false,
            },
        },
        build: {
            assetsInlineLimit: 0,
        },
        base: "/tec_drive/",
    });
};
