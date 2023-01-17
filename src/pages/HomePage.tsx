import { defineComponent } from "vue";
import style from "./style.module.less";

export default defineComponent({
    
    setup() {
        return () => <div class={style["page"]}>Home</div>;
    },
});