<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <article v-for="artist in americanArtists" :key="artist.id">
      <h2>{{artist.name}}</h2>
      <p>{{artist.lifetime}}</p>
      <p>{{artist.artwork}}</p>
      <button :id="artist.id" v-on:click="select($event)">View Artwork</button>
    </article>
  </div>
</template>

<script>
import GetAmericanArtistsApi from '@/services/api/AmericanArtists';
import GetSpecificAmericanArtist from '@/services/api/SpecificAmerican';
export default {
  name: 'AmericanArtists',
  methods: {
    select: async event => {
      const targetId = event.target.id;
      const data = await GetSpecificAmericanArtist.getAmericanArtist(targetId);
      return data.records;
    }
  },
  data() {
    return {
      americanArtists: []
    };
  },
  created() {
    GetAmericanArtistsApi.getAmericanArtists()
      .then(artists => {
        this.americanArtists = artists;
      })
      .catch(error => console.log(error));
  },
  mounted() {
    GetAmericanArtistsApi.getAmericanArtists()
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
        this.americanArtists = artist;
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
article {
  border-style: solid;
  border-color: crimson;
  border-width: 5px;
  margin-bottom: 1rem;
}
a {
  color: #42b983;
}
</style>
