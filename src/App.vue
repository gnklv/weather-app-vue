<template>
  <SvgIcons />
  <WeatherCard />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SvgIcons from '@/components/ui/svg/SvgIcons.vue';
import WeatherCard from '@/components/WeatherCard.vue';

export default defineComponent({
  name: 'App',
  components: {
    SvgIcons,
    WeatherCard,
  },
});
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
}

h1, p {
  margin: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #2a329e;
}
</style>
