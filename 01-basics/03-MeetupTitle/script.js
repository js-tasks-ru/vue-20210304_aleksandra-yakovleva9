import Vue from './vendor/vue.esm.browser.js';

const fetchMeetups = () => fetch('../api/meetups.json').then((res) => res.json());

const app = new Vue({
  data() {
    return {
      rawMeetups: [],
      active: '',
    };
  },

  computed: {
    meetups() {
      return this.rawMeetups.map((meetup) => ({
        ...meetup,
      }));
    },
  },

  mounted() {
    fetchMeetups().then((meetups) => {
      this.rawMeetups = meetups.slice(0, 5);
    });
  },
});

app.$mount('#app');
