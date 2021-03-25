import { getAgendaItemIcons, getAgendaItemDefaultTitles } from './data.js';

export default {
  name: 'MeetupAgendaItem',
  data() {
    return {
      getAgendaItemIcons: getAgendaItemIcons(),
      getAgendaItemDefaultTitles: getAgendaItemDefaultTitles(),
    };
  },
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
    agenda: null,
  },

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="'/assets/icons/icon-' + getAgendaItemIcons[agendaItem.type] + '.svg'" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ agendaItem.title !== null ? agendaItem.title : getAgendaItemDefaultTitles[agendaItem.type] }}</h5>
        <template v-if="agendaItem.type === 'talk'">
          <p>
            <span>{{ agendaItem.speaker }}</span>
            <span class="meetup-agenda__dot"></span>
            <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
          </p>
          <p v-if="agendaItem.description !== null">{{ agendaItem.description }}</p>
        </template>
      </div>
    </div>`,
};
