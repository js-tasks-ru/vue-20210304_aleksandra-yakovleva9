import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  data() {
    return {
      counter: 1,
    };
  },

  methods: {
    counterUp() {
      return this.counter++;
    },
  },
});

app.$mount('#app');
