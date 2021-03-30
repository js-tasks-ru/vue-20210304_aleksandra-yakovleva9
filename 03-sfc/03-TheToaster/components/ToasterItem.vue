<template>
  <div
    class="toast"
    :class="{ toast_success: toasterItem.status === 'success', toast_error: toasterItem.status === 'error' }"
  >
    <app-icon :icon="toasterItem.status === 'success' ? 'check-circle' : 'alert-circle'" />
    <span>{{ toasterItem.message }}</span>
  </div>
</template>
<script>
import AppIcon from './AppIcon';
export default {
  name: 'ToasterItem',
  components: { AppIcon },
  props: {
    toasterItem: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
