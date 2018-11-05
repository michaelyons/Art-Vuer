<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <article v-for="artist in artists" :key="artist.id">
      <h2>{{artist.name}}</h2>
      <p>{{artist.lifetime}}</p>
      <p>{{artist.artwork}}</p>
      <button>View Artwork</button>
    </article>
  </div>
</template>

<script>
import GetArtistsApi from '@/services/api/Artists';
export default {
  name: 'Artists',

  data() {
    return {
      artists: []
    };
  },
  created() {
    GetArtistsApi.getArtists()
      .then(artists => {
        this.artists = artists;
      })
      .catch(error => console.log(error));
  },
  mounted() {
    GetArtistsApi.getArtists()
      .then(artists => {
        const artist = artists.map(artist => {
          return {
            name: artist.displayname,
            lifetime: artist.displaydate,
            artwork: artist.objectcount,
            website: artist.url,
            id: artist.id
          };
        });
        this.artists = artist;
        console.log(artist);
      })
      .catch(error => console.log(error));
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
