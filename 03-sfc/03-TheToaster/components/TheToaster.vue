<template>
  <div class="toasts">
    <toaster-item v-for="item in toasterList" :key="item.id" :toaster-item="item" />
  </div>
</template>

<script type="module">
import ToasterItem from './ToasterItem';

const DELAY = 5000;

export default {
  name: 'TheToaster',
  components: { ToasterItem },
  data() {
    return {
      toasterList: [],
      addItem: () => ({}),
    };
  },

  methods: {
    error(message) {
      this.addItem = {};
      this.addItem.message = message;
      this.addItem.status = 'error';
      this.toasterList.push(this.addItem);
      setTimeout(() => this.toasterList.shift(this.addItem), DELAY);
    },

    success(message) {
      this.addItem = {};
      this.addItem.status = 'success';
      this.addItem.message = message;
      this.toasterList.push(this.addItem);
      setTimeout(() => this.toasterList.shift(this.addItem), DELAY);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast > .icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
