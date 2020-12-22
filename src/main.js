import { createApp } from "vue";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import "./registerServiceWorker";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./cullIcons.js";
import "./scss/index.scss";

const app = createApp(App);

app.use(store);
app.use(router);

// app.config.productionTip = false;
app.component("fa-icon", FontAwesomeIcon);
app.component("fa-layer", FontAwesomeLayers);
app.component("fa-layer-text", FontAwesomeLayersText);

router.isReady().then(() => {
  app.mount("#s19-s20-practiceapp");
});
