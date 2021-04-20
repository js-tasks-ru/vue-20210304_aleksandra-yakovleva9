<template>
  <section class="page page_onboarding">
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>
<script>
export default {
  name: 'AuthLayout',
  components: {},
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.page.page_onboarding {
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
}
</style>
