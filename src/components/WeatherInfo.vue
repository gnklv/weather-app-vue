<template>
  <header class="weather-info__header">
    <ui-svg-icon icon-id="location" class="weather-info-city__icon" />
    <p class="weather-info-city">{{ weather.name }}</p>
  </header>

  <section class="weather-info__main">
    <div class="weather-info-icon__wrapper">
      <img
        :src="weatherIcon"
        :alt="weatherInfo.main"
        class="weather-info-icon"
      >
    </div>
    <div class="weather-info__main-col">
      <div class="weather-info-temp">
        <p class="weather-info-temp__value">{{ weather.main.temp }}</p>
        <p class="weather-info-temp__unit">°C</p>
      </div>
      <div class="weather-info-desc">
        <p class="weather-info-desc__text">
          {{ weatherInfo.description }}
        </p>
      </div>
    </div>
  </section>

  <footer class="weather-info__footer">
    <div class="weather-info__footer-col">
      <div class="weather-info-additional">
        <p class="weather-info-additional__value">{{ weather.main.temp_min }}°</p>
        <p class="weather-info-additional__caption">Мин</p>
      </div>
      <div class="weather-info-additional">
        <p class="weather-info-additional__value">{{ weather.main.temp_max }}°</p>
        <p class="weather-info-additional__caption">Макс</p>
      </div>
    </div>

    <div class="weather-info__footer-col">
      <div class="weather-info-additional">
        <p class="weather-info-additional__value">{{ weather.clouds.all }}%</p>
        <p class="weather-info-additional__caption">Облачность</p>
      </div>
      <div class="weather-info-additional">
        <p class="weather-info-additional__value">{{ weather.main.humidity }}%</p>
        <p class="weather-info-additional__caption">Влажность</p>
      </div>
    </div>

    <div class="weather-info__footer-col">
      <div class="weather-info-additional">
        <p class="weather-info-additional__value">{{ weather.wind.speed }}м/с</p>
        <p class="weather-info-additional__caption">Ветер</p>
      </div>
      <div class="weather-info-additional">
        <p class="weather-info-additional__value">{{ weather.main.pressure }}</p>
        <p class="weather-info-additional__caption">Давление</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, computed } from 'vue';

import config from '@/config';
import type { OpenWeather, Weather } from '@/types/OpenWeather';

import UiSvgIcon from '@/components/ui/svg/UiSvgIcon.vue';

export default defineComponent({
  name: 'WeatherInfo',
  components: { UiSvgIcon },
  props: {
    weather: {
      type: Object as PropType<OpenWeather>,
      required: true,
    },
  },
  setup(props) {
    const weatherInfo = computed<Weather>(() => props.weather.weather[0]);

    const weatherIcon = computed(() => {
      const { protocol, host, imagesPath } = config;
      const size = '2x';
      const ext = 'png';
      return `${protocol}://${host + imagesPath}/${weatherInfo.value.icon}@${size}.${ext}`;
    });

    return { weatherInfo, weatherIcon };
  },
});
</script>

<style lang="scss" scoped>
.weather-info {
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: auto;
  }

  &__main {
    display: flex;
    align-items: center;
    margin-bottom: auto;

    &-col {
      display: flex;
      flex-direction: column;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background: rgba(#fff, 5%);

    &-col {
      display: flex;
      flex-direction: column;
    }
  }
}

.weather-info-city {
  font-size: 16px;
  font-weight: bold;

  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    fill: #fff;
  }
}

.weather-info-icon {
  width: 100%;
  height: 100%;

  &__wrapper {
    width: 100px;
    height: 100px;
    margin-right: 16px;
    border-radius: 50%;
    background-color: #fff;
  }
}

.weather-info-temp {
  display: flex;

  &__value {
    font-size: 72px;
    font-weight: bold;
    line-height: 1;
  }

  &__unit {
    font-size: 24px;
    line-height: 1;
  }
}

.weather-info-desc {
  display: flex;

  &__text {
    font-size: 16px;
    text-transform: capitalize;
  }
}

.weather-info-additional {
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &__value {
    font-size: 22px;
    font-weight: bold;
  }

  &__caption {
    font-size: 12px;
  }
}
</style>
