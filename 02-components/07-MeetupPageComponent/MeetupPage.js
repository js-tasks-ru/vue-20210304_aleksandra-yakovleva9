import MeetupView from '../06-MeetupView/MeetupView.js';
import { fetchMeetup, MEETUP_ID } from './data.js';

export default {
  name: 'MeetupPage',
  data() {
    return {
      rawMeetup: null,
    };
  },
  components: { MeetupView },
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
    fetchMeetup(MEETUP_ID).then((meetup) => {
      this.rawMeetup = meetup;
    });
  },

  template: `<div v-if="rawMeetup">
    <meetup-view :meetup="meetup"/>
  </div>`,
};
