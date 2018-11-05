<template>
  <div class="artists">
    <SpanishArtists msg="View Spanish Artists"/>
  </div>
</template>

<script>
import SpanishArtists from '@/components/SpanishArtists.vue';
export default {
  name: 'spanish-artists',
  components: {
    SpanishArtists
  }
};
</script>
