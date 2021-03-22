export const CounterButton = {
  name: 'CounterButton',

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<div><button type="button" @click="$emit('update:count', count + 1 )" >{{ count }}</button></div>`,
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
};
