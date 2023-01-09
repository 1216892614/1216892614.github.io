import { defineComponent } from "vue";
import "./style.less";
import { smooth } from "../../utils/animation";

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
            <div class="NavigationBar-main">
                <div class="NavigationBar-iconWrapper" onClick={onclick}>
                    <img src="/src/assets/icons/RMG.svg" height="50" />
                </div>
                {props.routeNames.map((n) => (
                    <router-link to={{ name: n }} class="NavigationBar-links">
                        {n.toUpperCase()}
                    </router-link>
                ))}

                <div class="padding" />

                <div class="NavigationBar-iconWrapper">
                    <router-link to="NerdsGroup" class="NavigationBar-links">
                        <img src="src/assets/icons/NerdsLOGO.svg" height="45" />
                    </router-link>
                </div>
                <div class="NavigationBar-iconWrapper">
                    <router-link to="OrangeGroup" class="NavigationBar-links">
                        <img
                            src="src/assets/icons/OrangeLOGO.svg"
                            height="45"
                        />
                    </router-link>
                </div>
            </div>
        );
    },
});
