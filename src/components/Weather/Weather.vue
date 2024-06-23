<template>
  <div class="Weather">
    <div class="container">
      <div class="Weather__inner">
        <input v-model="place" type="text" placeholder="Place">
        <button type="button" @click="fetchWeather">Find</button>
        <div v-if="error">
          <p>Error</p>
        </div>
        <div v-else-if='info.location && info.current'>
          <p>{{ info.location.name }}</p>
          <p>{{ info.location.country }}</p>
          <p>{{ info.location.localtime }}</p>
          <p>{{ info.current.temp_c }}C&deg;</p>
          <p>{{ info.current.condition.text }}</p>
          <img :src="info.current.condition.icon" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Weather',
  data() {
    return {
      place: '',
      info: {},
      error: false,
    }
  },
  methods: {
    async fetchWeather() {
      try {
        console.log('Fetching weather data...');
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=88f1121b69e241d0a02135405242306&q=${this.place}&aqi=no`);
        this.info = response.data;
        this.error = false; // Reset error flag on successful response
      } catch (error) {
        this.info = {};
        this.error = true;
        console.error('Error fetching weather data: ', error);
      }
    },
  },
}
</script>
