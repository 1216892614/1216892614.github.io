import { createApp } from "vue";
import "./style.less";
import App from "./App";

import mainRouter from "./mainRouter";

let app = createApp(App);
app.use(mainRouter);

app.mount("#app");
