import { defineComponent } from "vue";
import style from "./style.module.less";

import Footer from "../Footer";
import NavigationBar from "../NavigationBar";

export default defineComponent({
    setup() {
        return () => (
            <div class={style["body-div"]}>
                <NavigationBar routeNames={["home", "about"]} />
                <div class={style["page"]}>
                    <router-view></router-view>
                    <div class="padding" />
                    <Footer />
                </div>
            </div>
        );
    },
});
