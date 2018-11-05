<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <article v-for="spanish in spanishArtists" :key="spanish.id">
      <h2>{{spanish.name}}</h2>
      <p>{{spanish.lifetime}}</p>
      <p>{{spanish.artwork}}</p>
      <button>View Artwork</button>
    </article>
  </div>
</template>

<script>
import GetSpanishArtistsApi from '@/services/api/SpanishArtists';
export default {
  name: 'SpanishArtists',

  data() {
    return {
      spanishArtists: []
    };
  },
  created() {
    GetSpanishArtistsApi.getSpanishArtists()
      .then(spanishArtists => {
        this.spanishArtists = spanishArtists;
      })
      .catch(error => console.log(error));
  },
  mounted() {
    GetSpanishArtistsApi.getSpanishArtists()
      .then(spanishArtists => {
        const spanish = spanishArtists.map(artist => {
          return {
            name: artist.displayname,
            lifetime: artist.displaydate,
            artwork: artist.objectcount,
            website: artist.url,
            id: artist.id
          };
        });
        this.spanishArtists = spanish;
      })
      .catch(error => console.log(error));
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
