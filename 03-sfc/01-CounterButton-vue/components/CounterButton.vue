<template>
  <button type="button" @click="counterUp(count)">
    {{ count }}
  </button>
</template>

<script>
export default {
  name: 'CounterButton',

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
</script>

<style></style>
