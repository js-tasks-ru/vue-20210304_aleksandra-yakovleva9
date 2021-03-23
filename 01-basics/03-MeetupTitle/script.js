import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  data() {
    return {
      activeId: 0,
      rawMeetup: null,
    };
  },

  watch: {
    activeId() {
      return fetch(`https://course-vue.javascript.ru/api/meetups/${this.activeId}`)
        .then((res) => res.json())
        .then((meetup) => {
          this.rawMeetup = meetup.title;
        });
    },
  },
});

app.$mount('#app');
