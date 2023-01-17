import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NerdsPage from "./pages/NerdsPage";
import PigeonsPage from "./pages/PigeonsPage";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { name: "home", path: "/", component: HomePage },
        { name: "about", path: "/about", component: AboutPage },
        { name: "NerdsPage", path: "/NerdsPage", component: NerdsPage },
        { name: "PigeonsPage", path: "/PigeonsPage", component: PigeonsPage },
    ],
});
