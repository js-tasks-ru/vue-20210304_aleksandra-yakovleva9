// import { MeetupAgendaItem } from './MeetupAgendaItem.js';
import MeetupAgendaItem from "./MeetupAgendaItem.js";

export default {
  name: 'MeetupAgenda',
  props: {
    agenda: {
      type: Array,
      default: [],
    },
  },
  components: { MeetupAgendaItem },

  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item v-for="item in agenda" :agenda-item="item" :key="item.id"/>
    </div>`,
};
