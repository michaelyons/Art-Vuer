<template>
  <div class="welcome">
    <img alt="Vue logo" src="https://media.giphy.com/media/3ohhwDfcBvBPpD9RZu/giphy.gif">
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'welcome',
  components: {
    Welcome
  }
};
</script>
<style scoped>
img {
  padding-top: 3rem;
}
</style>

