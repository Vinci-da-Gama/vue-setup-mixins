import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export const setupWithVuex = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations,
  actions,
  getters,
};
