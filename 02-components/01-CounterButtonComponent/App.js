import { CounterButton } from './components/CounterButton.js';

export const App = {
  name: 'App',
  template: `<main id="app">
    <counter-button  v-on:counterUp />
  </main>`,
  components: { CounterButton },
  data() {
    return {
      count: 0,
    };
  },
  updateTitle(updatedTitle){
    this.title = updatedTitle;
  }
}
