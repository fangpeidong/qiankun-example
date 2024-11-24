<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  props: ['action', 'commonData'],
  provide() {
    return {
      mainAction: this.action,
      mainCommonData: this.commonData
    };
  }
};
</script>
