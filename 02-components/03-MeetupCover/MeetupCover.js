export default {
  name: 'MeetupCover',
  data() {
    return {};
  },
  computed: {
    coverStyle() {
      return {
        bgImage:
          this.link !== null
            ? {
                '--bg-url': `url(${this.link})`,
              }
            : undefined,
      };
    },
  },
  props: {
    link: {
      type: String,
      default: null,
    },
    title: String,
  },
  template: `
    <div class="meetup-cover" :style="coverStyle.bgImage">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
};
