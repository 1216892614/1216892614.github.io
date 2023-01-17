import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        //* css模块化
        modules: {
            // css模块化 文件以.module.[css|less|scss]结尾
            generateScopedName: "[name]__[local]___[hash:base64:5]",
            hashPrefix: "prefix",
        },
        //* 预编译支持less
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
            },
        },
    },
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
