export default {
  name: 'MeetupDescription',

  // Входные параметры

  template: `<p class="meetup-description">{{ description }}</p>`,
  props: {
    description: String,
  },
};
