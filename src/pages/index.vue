<template>
  <p>index</p>
  <p @click="inc">{{ count }}</p>
  <div>
    <p>routers</p>
    <div>
      <router-link to="/test">test</router-link>
    </div>
    <div>
      <router-link to="/article">article</router-link>
    </div>
    <div>
      <router-link to="/article/123">article/123</router-link>
    </div>
    <div>
      <router-link to="/nothing">nothing</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Analytics } from '../utils/firebase'

ref: count = 1
const inc = () => {
  count++
  Analytics.logEvent('click_inc_count', { count })
}
</script>
