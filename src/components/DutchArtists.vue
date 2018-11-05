<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <article v-for="dutch in dutchArtists" :key="dutch.id">
      <h2>{{dutch.name}}</h2>
      <p>{{dutch.lifetime}}</p>
      <p>{{dutch.artwork}}</p>
      <button>View Artwork</button>
    </article>
  </div>
</template>

<script>
import GetDutchArtistsApi from '@/services/api/DutchArtists';
export default {
  name: 'DutchArtists',

  data() {
    return {
      dutchArtists: []
    };
  },
  created() {
    GetDutchArtistsApi.getDutchArtists()
      .then(dutchArtists => {
        this.dutchArtists = dutchArtists;
      })
      .catch(error => console.log(error));
  },
  mounted() {
    GetDutchArtistsApi.getDutchArtists()
      .then(dutchArtists => {
        const dutch = dutchArtists.map(artist => {
          return {
            name: artist.displayname,
            lifetime: artist.displaydate,
            artwork: artist.objectcount,
            website: artist.url,
            id: artist.id
          };
        });
        this.dutchArtists = dutch;
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
