<template>
  <div class="home">
    <div>vue3-child: {{ mainCommonData.count }}</div>
    <button @click="addCount">count+20</button>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const mainAction = inject('mainAction');
const mainCommonData = inject('mainCommonData');

function addCount() {
  mainAction.setGlobalState({
    count: mainCommonData.count + 20
  });
}
</script>
