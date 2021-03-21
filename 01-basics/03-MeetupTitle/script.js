import Vue from './vendor/vue.esm.browser.js';

function fetchMeetup(idMeetup) {
  return fetch(`https://course-vue.javascript.ru/api/meetups/${idMeetup}`).then((res) => res.json());
}

const app = new Vue({
  data() {
    return {
      rawMeetup: null,
      idMeetup: 3,
    };
  },

  computed: {
    meetup() {
      if (!this.rawMeetup) {
        return null;
      }
      return {
        ...this.rawMeetup,
        idMeetup: 4,
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
