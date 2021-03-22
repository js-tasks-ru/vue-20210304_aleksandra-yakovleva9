import { CounterButton } from './components/CounterButtonComponent/CounterButton.js';

export const App = {
  name: 'App',
  template: `<main id="app">
    <counter-button :count.sync="count"/>
  </main>`,
  components: { CounterButton },
  data() {
    return {
      count: 0,
    };
  },
};
