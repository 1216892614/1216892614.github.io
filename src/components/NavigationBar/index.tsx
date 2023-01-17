import { defineComponent } from "vue";
import style from "./style.module.less";
import { smooth } from "../../utils/animation";

import RMG from "/src/assets/icons/RMG.svg";
import NerdsLOGO from "/src/assets/icons/NerdsLOGO.svg";
import OrangeLOGO from "/src/assets/icons/OrangeLOGO.svg";

interface Props {
    routeNames: string[];
}

export default defineComponent({
    props: ["routeNames"],
    setup(props: Props) {
        const onclick = (evt: MouseEvent) => {
            evt.preventDefault();

            const bodyDiv = document.getElementById("app") as HTMLDivElement;

            let time = 0;
            const pos = [0, bodyDiv.clientHeight] as [number, number];

            let interval = setInterval(() => {
                if (bodyDiv.scrollTop - 0 >= 0.01) {
                    bodyDiv.scrollTop =
                        bodyDiv.clientHeight -
                        smooth(pos[0], pos[1], 0.2, time);
                    time++;
                } else {
                    clearInterval(interval);
                }
            }, 10);
        };
        return () => (
            <div class={style["NavigationBar-main"]}>
                <div
                    class={style["NavigationBar-iconWrapper"]}
                    onClick={onclick}
                >
                    <img src={RMG} height="50" />
                </div>
                {props.routeNames.map((n) => (
                    <router-link
                        to={{ name: n }}
                        class={style["NavigationBar-links"]}
                    >
                        {n.toUpperCase()}
                    </router-link>
                ))}

                <div class="padding" />

                <div class={style["NavigationBar-iconWrapper"]}>
                    <router-link
                        to="NerdsPage"
                        class={style["NavigationBar-links"]}
                    >
                        <img src={NerdsLOGO} height="45" />
                    </router-link>
                </div>
                <div class={style["NavigationBar-iconWrapper"]}>
                    <router-link
                        to="PigeonsPage"
                        class={style["NavigationBar-links"]}
                    >
                        <img src={OrangeLOGO} height="45" />
                    </router-link>
                </div>
            </div>
        );
    },
});
