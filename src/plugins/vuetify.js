import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#ffc900",
        secondary: "#ffa800",
      },
    },
  },
});
