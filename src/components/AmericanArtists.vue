<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <article v-for="artist in americanArtists" :key="artist.id" v-on:click="toggle = true">
      <h2>{{artist.name}}</h2>
      <p>Number of Works: {{artist.artwork}}</p>
      <button :id="artist.id" v-on:click="select($event), toggle = !toggle">Click to view/remove Artwork</button>
    </article>
      <div v-for='art in uniqueArt' :key="art.id" v-bind:class="[uniqueArt]" v-show='toggle'>
        <h1>{{art.title}}</h1>
        <p>{{art.technique}}</p>
        <p>{{art.period}}</p>
        <img :src="art.image" alt="no images found">
      </div>
  </div>
</template>



<script>
import GetAmericanArtistsApi from '@/services/api/AmericanArtists';
import GetSpecificAmericanArtist from '@/services/api/SpecificArtist';
export default {
  name: 'AmericanArtists',
  data() {
    return {
      americanArtists: [],
      toggle: true,
      uniqueArt: []
    };
  },
  methods: {
    select: function(event) {
      const targetId = event.target.id;
      GetSpecificAmericanArtist.getSpecificArtist(targetId)
        .then(data => {
          const uniqueArtwork = data.records.map(record => {
            return {
              artType: record.division,
              technique: record.technique,
              title: record.title,
              period: record.century,
              image: record.primaryimageurl,
              created: record.dateend
            };
          });
          this.uniqueArt = uniqueArtwork;
        })
        .catch(error => console.log(error));
    }
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

a {
  color: #42b983;
}
</style>
