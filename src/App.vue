<template>
  <p>online status: {{ online }}</p>
  <p>Open devtool, then drag the list 👇</p>
  <draggable v-model="myArray" group="people" item-key="id">
    <template #item="{ element }">
      <div style="border: 1px solid; margin: 5px auto; padding: 5px">
        {{ element.name }}
      </div>
    </template>
  </draggable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import draggable from "vuedraggable";
import { useOnline } from "vue-composable";

export default defineComponent({
  components: {
    draggable,
  },
  setup() {
    const { online } = useOnline();

    return {
      online,
      myArray: [
        {
          id: 123,
          name: 123,
        },
        {
          id: 456,
          name: 456,
        },
      ],
    };
  },
});
</script>
