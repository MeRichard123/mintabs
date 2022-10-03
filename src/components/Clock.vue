<template>
  <h1 class="clock text-7xl text-textLight dark:text-textDark font-medium">{{time}}</h1>
  <h2 class="themeText">{{date}}</h2>
</template>

<script>
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

export default {
  name: 'clock-component',
  mounted() {
    setInterval(() => this.getTime(), 1000);
  },
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      date: '',
    };
  },
  methods: {
    getTime() {
      const dateObject = new Date();
      let hours = dateObject.getHours();
      let minutes = dateObject.getMinutes();
      let seconds = dateObject.getSeconds();
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      this.date = format(dateObject, 'eeee do LLLL yyyy', { locale: enGB });
    },
  },
  computed: {
    time() {
      return `${this.hours}:${this.minutes}:${this.seconds}`;
    },
  },
};
</script>
