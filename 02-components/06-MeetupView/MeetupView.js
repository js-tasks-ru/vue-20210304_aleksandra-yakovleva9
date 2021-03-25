import MeetupCover from '../03-MeetupCover/MeetupCover.js';
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js';
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js';
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

export default {
  name: 'MeetupView',
  data() {
    return {
      imageId: getImageUrlByImageId(this.meetup.imageId),
    };
  },
  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
  components: { MeetupCover, MeetupDescription, MeetupAgenda, MeetupInfo },
  template: `
    <div>
      <!-- meetup cover -->
      <meetup-cover :title="meetup.title" :link="imageId"/>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3> Описание</h3>
            <!-- meetup description -->
            <meetup-description :description="meetup.description"/>
            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda"/>
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
            <meetup-info :date="new Date(meetup.date)" :organizer="meetup.organizer" :place="meetup.place" />
          </div>
        </div>
      </div>
    </div>`,
};
