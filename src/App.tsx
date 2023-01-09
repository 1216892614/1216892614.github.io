import { defineComponent, onMounted } from "vue";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import TitleArea from "./components/TitleArea";
import { smooth } from "./utils/animation";

export default defineComponent({
    setup() {
        return () => (
            <>
                <TitleArea />
                <div class="body-div">
                    <NavigationBar routeNames={["home", "about"]} />
                    <router-view></router-view>
                </div>
            </>
        );
    },
});
