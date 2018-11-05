<template>
  <div class="artists">
    <AmericanArtists msg="View American Artists"/>
  </div>
</template>

<script>
import AmericanArtists from '@/components/AmericanArtists.vue';
export default {
  name: 'american-artists',
  components: {
    AmericanArtists
  }
};
</script>
