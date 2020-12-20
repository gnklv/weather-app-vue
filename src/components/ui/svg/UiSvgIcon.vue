<template>
  <svg xmlns="http://www.w3.org/2000/svg">
    <use :href="`#icon-${iconId}`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiSvgIcon',
  props: {
    iconId: {
      type: String,
      required: true,
    },
  },
});
</script>
