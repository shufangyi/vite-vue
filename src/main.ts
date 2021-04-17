import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

import enUS from "./locales/en-US.json";
import zhCN from "./locales/zh-CN.json";

const app = createApp(App);

const i18n = createI18n({
  locale: localStorage.getItem("locale") || "zh-CN",
  messages: {
    "en-US": enUS,
    "zh-CN": zhCN,
  },
});

app.use(i18n);
app.mount("#app");
