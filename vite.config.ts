import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        extensions: [".jsx", ".js", ".tsx", ".ts"],
    },
    plugins: [
        vue(),
        vueJsx({
            // option to @vue/babel-plugin-jsx
        }),
    ],
});
