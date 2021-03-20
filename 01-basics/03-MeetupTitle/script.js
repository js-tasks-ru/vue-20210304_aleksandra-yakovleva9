import Vue from './vendor/vue.esm.browser.js';

function fetchMeetup(id) {
  return fetch(`https://course-vue.javascript.ru/api/meetups/${id}`).then((res) => res.json());
}

const app = new Vue({
  data() {
    return {
      rawMeetup: [],
      id: 3,
    };
  },

  computed: {
    meetup() {
      if (!this.rawMeetup) {
        return null;
      }
      return {
        ...this.rawMeetup,
        id: this.rawMeetup = 5,
      };
    },
  },

  methods: {
    getId () {
      return this.id = this.rawMeetup.id;
    }
  },

  mounted() {
    fetchMeetup(this.id).then((meetup) => {
      this.rawMeetup = meetup;
    });
  },
});

app.$mount('#app');
