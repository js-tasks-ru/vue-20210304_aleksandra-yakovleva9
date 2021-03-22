import { CounterButton } from './VCounterButton.js';

export const App = {
  name: 'App',
  template: `<main id="app">
    <counter-button :counter="counter" @counter-up="counter = $event"/>
  </main>`,
  components: { CounterButton },
  data() {
    return {
      counter: 0,
    };
  },
}
