<template>
  <main class="weather-card">
    <h1 class="weather-card__title">Weather App</h1>

    <weather-loading v-if="locationState === 'loading'" />
    <weather-location
      v-if="locationState === 'success'"
      :coords="{
        lat: location.latitude,
        long: location.longitude
      }"
    />
    <weather-error
      v-else-if="locationState === 'error'"
      :error-msg="locationError.message"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useAsync, useGeolocation } from '@/hooks';

import WeatherLoading from '@/components/WeatherLoading.vue';
import WeatherLocation from '@/components/WeatherLocation.vue';
import WeatherError from '@/components/WeatherError.vue';

export default defineComponent({
  name: 'WeatherCard',
  components: {
    WeatherLoading,
    WeatherLocation,
    WeatherError,
  },
  setup() {
    const {
      data: location,
      state: locationState,
      error: locationError,
    } = useAsync(useGeolocation);

    return {
      location, locationState, locationError,
    };
  },
});
</script>

<style lang="scss" scoped>
.weather-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(180deg,#297af9,#333fb7);
  overflow: hidden;

  @media screen and (min-width: 767px) {
    width: 375px;
    height: 667px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 20px 0 rgba(0,0,0,.06);
  }

  &__title {
    margin: 0 0 8px;
    text-align: center;
    font-weight: normal;
  }
}
</style>
