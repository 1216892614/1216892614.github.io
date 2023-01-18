import { defineComponent, onMounted } from "vue";
import { smooth } from "./utils/animation";

import TitleArea from "./components/TitleArea";
import MainArea from "./components/MainArea";

export default defineComponent({
    setup() {
        return () => {
            return (
                <>
                    <TitleArea />
                    <MainArea />
                </>
            );
        };
    },
});
