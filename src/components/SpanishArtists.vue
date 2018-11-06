<template>
  <div class="hello">
    <article v-for="spanish in spanishArtists" :key="spanish.id">
      <h2>{{spanish.name}}</h2>
      <p>{{spanish.lifetime}}</p>
      <p>{{spanish.artwork}}</p>
      <button :id="spanish.id" v-on:click="select($event)">View Artwork</button>
    </article>
  </div>
</template>

<script>
import GetSpanishArtistsApi from '@/services/api/SpanishArtists';
import GetSpecificSpanishArtist from '@/services/api/SpecificArtist';
export default {
  name: 'SpanishArtists',
  data() {
    return {
      spanishArtists: []
    };
  },
  methods: {
    select: async event => {
      const targetId = event.target.id;
      const data = await GetSpecificSpanishArtist.getSpecificArtist(targetId);
      console.log(data);
      return data.records;
    }
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
