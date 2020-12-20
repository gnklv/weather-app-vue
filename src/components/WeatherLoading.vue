<template>
  <ui-svg-icon class="weather-loading__icon" icon-id="pin" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import UiSvgIcon from '@/components/ui/svg/UiSvgIcon.vue';

export default defineComponent({
  name: 'WeatherLoading',
  components: { UiSvgIcon },
});
</script>

<style lang="scss" scoped>
.weather-loading {
  &__icon {
    width: 50px;
    height: 50px;
    margin: auto;
    fill: #fff;
    animation: jumping 1s infinite;
  }
}

@keyframes jumping {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-50%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
