<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <h1 id="headOne">{{ msg }}</h1>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>