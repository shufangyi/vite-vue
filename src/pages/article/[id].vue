<template>
  <div>
    {{ id }}
  </div>
</template>

<script lang="ts" setup="">
import { defineProps } from 'vue'

defineProps({
  id: {
    type: [String, Number],
  },
})
</script>
