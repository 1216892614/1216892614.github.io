import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { name: "home", path: "/", component: HomePage },
        { name: "about", path: "/about", component: AboutPage },
    ],
});
