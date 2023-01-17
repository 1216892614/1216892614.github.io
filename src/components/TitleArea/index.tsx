import { defineComponent, onMounted, ref } from "vue";
import style from "./style.module.less";
import { multiStyles, smooth } from "../../utils/animation";
import AnimationWords from "./AnimationWords";

export default defineComponent({
    setup() {
        const size = ref([800, 800] as [number, number]);

        onMounted(() => {
            const mainCvs = document.getElementsByClassName(
                "TitleArea-main"
            )[0] as HTMLCanvasElement;
        });

        let isScrollMoving = false;

        const onWheel = (evt: WheelEvent) => {
            if (evt.deltaY > 0 && !isScrollMoving) {
                isScrollMoving = true;
                evt.preventDefault();

                const bodyDiv = document.getElementById(
                    "app"
                ) as HTMLDivElement;

                let time = 0;
                const pos = [
                    bodyDiv.scrollTop,
                    bodyDiv.clientHeight,
                    bodyDiv.offsetHeight,
                ] as [number, number, number];

                let interval = setInterval(() => {
                    if (pos[1] - bodyDiv.scrollTop >= 1) {
                        console.log(bodyDiv.scrollTop, pos[1], pos[2]);
                        bodyDiv.scrollTop = smooth(pos[0], pos[1], 0.2, time);
                        time++;
                    } else {
                        isScrollMoving = false;
                        clearInterval(interval);
                    }
                }, 10);
            }
        };

        const words = [
            "武器",
            "魔法",
            "一个周末",
            "决心",
            "人物卡",
            "零食",
            "鬼点子",
            "玩家手册",
            "D20",
            "可口可乐",
        ];

        return () => (
            <div
                class={multiStyles(
                    style["TitleArea-main"],
                    style["TitleArea-background"]
                )}
                onWheel={onWheel}
            >
                <h1 class={style["TitleArea-Title"]}>
                    准备好你的
                    <AnimationWords words={words} />
                    <br />
                    接下来,
                    <br />
                    是新的冒险
                </h1>
            </div>
        );
    },
});
