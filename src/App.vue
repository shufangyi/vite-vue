<template>
  <div @click="$router.back()">&lt; back</div>
  <router-view v-slot="{ Component, route }">
    <keep-alive :max="10">
      <component v-if="route?.meta?.keepAlive" :is="Component" :key="route.fullPath" />
    </keep-alive>
    <component v-if="!route?.meta?.keepAlive" :is="Component" :key="route.fullPath" />
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {},
})
</script>
