<template>
  <section class="page page_meetup-forms">
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'FormLayout',
  components: {},
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.page.page_meetup-forms {
  padding: 70px 0;
}

@media all and (max-width: 992px) {
  .page.page_meetup-forms {
    padding: 48px 0;
  }
}
</style>
