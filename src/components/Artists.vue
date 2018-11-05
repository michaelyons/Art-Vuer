<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <article v-for="artist in artists" :key="artist.id">
      <h2>{{artist.name}}</h2>
    </article>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
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
            id: artist.id
          };
        });
        this.artists = artist;
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
