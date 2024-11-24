<template>
  <div class="home">
    <div>vue2-child: {{ mainCommonData.count }}</div>
    <el-button @click="changeCount">count + 10</el-button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  inject: ['mainAction', 'mainCommonData'],
  methods: {
    changeCount() {
      this.mainAction.setGlobalState({
        count: this.mainCommonData.count + 10
      });
    }
  }
};
</script>
