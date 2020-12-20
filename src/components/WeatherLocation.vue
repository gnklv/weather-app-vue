<template>
  <weather-loading v-if="weatherState === 'loading'" />
  <weather-info
    v-else-if="weatherState === 'success'"
    :weather="weather"
  />
  <weather-error
    v-else-if="weatherState === 'error'"
    :error-msg="weatherError.message"
  />
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, computed } from 'vue';

import { useFetch } from '@/hooks';
import { genUrl } from '@/utils';

import WeatherLoading from '@/components/WeatherLoading.vue';
import WeatherInfo from '@/components/WeatherInfo.vue';
import WeatherError from '@/components/WeatherError.vue';

export default defineComponent({
  name: 'WeatherLocation',
  components: {
    WeatherLoading,
    WeatherInfo,
    WeatherError,
  },
  props: {
    coords: {
      type: Object as PropType<{ lat: number; long: number }>,
      required: true,
    },
  },
  setup(props) {
    const url = computed(() => genUrl(
      'weather',
      {
        lat: props.coords.lat,
        lon: props.coords.long,
      },
    ));

    const {
      data: weather,
      state: weatherState,
      error: weatherError,
    } = useFetch(url);

    return { weather, weatherState, weatherError };
  },
});
</script>
