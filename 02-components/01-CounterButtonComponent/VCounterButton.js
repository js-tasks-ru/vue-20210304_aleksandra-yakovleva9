export const CounterButton = {
  name: 'CounterButton',

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="counterUp">{{counter}}</button>`,
  props: {
    counter: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    counterUp() {
      return this.$emit('counter-up', this.counter++);
    },
  },

};
