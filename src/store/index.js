import { createStore } from "vuex";

import globalState from "./global";
import { setupWithVuex } from "./modules/setupWithVuex";

export default createStore({
  modules: {
    globalState,
    setupWithVuex,
  },
});
