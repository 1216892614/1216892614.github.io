import { defineComponent } from "vue";
import style from "./style.module.less";

import BocchiTheRoll from "/src/assets/icons/BocchiTheRoll.svg";
import Omajo from "/src/assets/icons/Omajo.svg";
import Origger from "/src/assets/icons/Origger.svg";

export default defineComponent({
    setup() {
        return () => (
            <div class={style["main-div"]}>
                <div class="padding" />
                <div class={style["text-area"]}>
                    <img src={BocchiTheRoll} class={style["logo"]} />
                    <img src={Omajo} class={style["logo"]} />
                    <img src={Origger} class={style["logo"]} />
                </div>
                <div class={style["text-area"]}>
                    <h4 class={style["upper"]}>相关链接</h4>
                    <div class={style["lower"]}>
                        <a href="https://www.goddessfantasy.net/bbs/index.php?topic=114760.0/">
                            武汉跑团黄页
                        </a>
                        <a href="https://www.goddessfantasy.net/">纯美苹果园</a>
                        <a href="https://trow.cc/">TROW</a>
                        <a href="https://paizo.com/">Pazio</a>
                        <a href="https://paizo.com/pathfinder/">Pathfinder</a>
                        <a href="https://cc.163.com/361433/">神秘的直播</a>
                    </div>
                </div>
                <div class={style["text-area"]}>
                    <h4 class={style["upper"]}>QQ群</h4>
                    <span class={style["lower"]}>839742774</span>
                    <h4 class={style["upper"]}>邮箱</h4>
                    <span class={style["lower"]}>hndppt@outlook.com</span>
                </div>
                <div class="padding" />
            </div>
        );
    },
});
