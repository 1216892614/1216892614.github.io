import { defineComponent, ref } from "vue";
import { smooth } from "../../utils/animation";

interface Props {
    words: string[];
}

export default defineComponent({
    props: ["words"],
    setup(props: Props) {
        const spanRef = ref<HTMLElement | null>(null);

        let counter = 0;
        let showWordIndex = ref(0);

        const interval = setInterval(() => {
            counter++;

            if (counter >= 25) {
                showWordIndex.value =
                    (showWordIndex.value + 1) % props.words.length;
                counter = 0;
            }

            spanRef.value
                ? (spanRef.value.style.opacity = (
                      smooth(0, 100, 0.2, counter) / 100
                  ).toString())
                : null;
        }, 50);

        return () => (
            <span ref={spanRef}>{props.words[showWordIndex.value]},</span>
        );
    },
});
