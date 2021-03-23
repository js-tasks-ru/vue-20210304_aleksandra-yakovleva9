import Vue from './vendor/vue.esm.browser.js';

function fetchMeetup() {
  return fetch(`https://course-vue.javascript.ru/api/meetups/${4}`).then((res) => res.json());
}

const app = new Vue({
  data() {
    return {
      rawMeetup: null,
      idMeetup: null,
      activeId: 3,
    };
  },

  watch: {

  },

  computed: {
    meetup() {
      if (!this.rawMeetup) {
        return null;
      }
      return {
        ...this.rawMeetup,
      };
    },
  },

  mounted() {
    fetchMeetup(this.idMeetup).then((meetup) => {
      this.rawMeetup = meetup;
    });
  },
});

app.$mount('#app');
