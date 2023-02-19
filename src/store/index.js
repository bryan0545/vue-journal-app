import { createApp } from "vue";
import { journal } from "../modules/daybook/store/journal";

const store = createApp({
  modules: {
    journal,
  },
});

export default store;
