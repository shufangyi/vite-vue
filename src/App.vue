<template>
  <div>vue-i18n:{{ $t("common.title") }}</div>
  <div @click="switchHandler">switch: click me</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { locale } = useI18n();

    function switchHandler() {
      locale.value = locale.value === "en-US" ? "zh-CN" : "en-US";
    }

    return {
      switchHandler,
    };
  },
  mounted() {
    console.log(this.$t("common.title"));
  },
});
</script>
