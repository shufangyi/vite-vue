<template>
  <p>index</p>
  <p @click="inc">{{ count }}</p>
</template>

<script lang="ts" setup>
ref: count = 1
const inc = () => count++
</script>
