<script setup>
defineProps({
  source: {
    type: String,
    required: true
  },
  altText: {
    Type: String,
    required: true
  }
})
</script>

<template>
    <figure>
      <img :src=source :alt=altText>
    </figure>
</template>

<style lang="scss" scoped>
figure {
  width: 50%;
  margin: 0 auto;
}

img {
  width: 100%;
}
</style>