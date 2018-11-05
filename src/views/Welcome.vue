<template>
  <div class="welcome">
    <img alt="Vue logo" src="../assets/logo.png">
    <Welcome msg="Welcome to Vue Art"/>
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
