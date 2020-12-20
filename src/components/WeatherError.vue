<template>
  <p class="weather-error__message">{{ errorMsg }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WeatherError',
  props: {
    errorMsg: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.weather-error {
  &__message {
    margin: auto;
    font-size: 20px;
  }
}
</style>
