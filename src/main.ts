import { createApp } from "vue";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeLayersText,
  FontAwesomeLayers,
} from "@fortawesome/vue-fontawesome";
import {
  faBell,
  faGear,
  faCircleQuestion,
  faUser,
} from "@fortawesome/pro-regular-svg-icons";

/* add icons to the library */
library.add(faBell, faGear, faCircleQuestion, faUser);

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.component("FontAwesomeLayers", FontAwesomeLayers);
app.component("FontAwesomeLayersText", FontAwesomeLayersText);

app.mount("#app");
