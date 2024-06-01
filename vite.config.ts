import path from "node:path";
import * as url from "node:url";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          prettier: false,
          svgo: true,
          svgoConfig: {
            plugins: [{ removeViewBox: false }],
          },
          titleProp: true,
          ref: true,
        },
      }),
    ],
    resolve: {
      alias: {
        "~": path.resolve(
          path.dirname(url.fileURLToPath(import.meta.url)),
          "src"
        ),
      },
    },
    server: {
      port: 5173,
    },
    build: {
      target: "esnext",
    },
  };
});
