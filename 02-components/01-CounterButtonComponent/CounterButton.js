export default {
  name: 'CounterButton',

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="counterUp(count)">{{ count }}</button>',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    counterUp(value) {
      this.$emit('increment', value + 1);
    },
  },
};
