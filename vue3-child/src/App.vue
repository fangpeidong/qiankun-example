<template>
  <router-view />
</template>

<script setup>
import { provide } from 'vue';

const props = defineProps(['mainAction', 'mainCommonData']);

provide('mainAction', props.mainAction);
provide('mainCommonData', props.mainCommonData);
</script>
