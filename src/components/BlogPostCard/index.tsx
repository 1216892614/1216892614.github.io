import { defineComponent } from "vue";
import style from "./style.module.less";

interface Article {
    title: string;
    body: string;
}

interface Props {
    article: Article;
}

export default defineComponent({
    props: ["article", "author"],
    setup(props: Props) {
        return () => <div></div>;
    },
});
