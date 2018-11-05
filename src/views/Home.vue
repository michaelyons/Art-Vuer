<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Welcome msg="Welcome to Vue Artists App"/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'home',
  components: {
    Welcome
  }
};
</script>
