export const CounterButton = {
  name: 'CounterButton',

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button type="button" @click="$emit('counterUp', 'newCount')">{{ count }}</button>`,
  props: {
    count: {
      type: String,
      default: "Test",
    },
  },
  methods: {
    changeCount(count) {
      console.log(count);
    }
  }
};
