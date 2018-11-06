<template>
<div>
    <h1>{{msg}}</h1>
  <div class="hello">
    <div class="pictures">
      <div v-for='art in uniqueArt' :key="art.id" v-bind:class="[uniqueArt]" v-show='toggle' class="all-artwork-container">
        <h2>{{art.name}}</h2>
        <h3>{{art.title}}</h3>
        <p>{{art.technique}}</p>
        <p>{{art.period}}</p>
        <img :src="art.image" alt="no images found" class="image">
      </div>
      </div>
    <div class="art">
    <article v-for="artist in americanArtists" :key="artist.id" v-on:click="toggle = true" class="artist-container">
      <h2>{{artist.name}}</h2>
      <p>Number of Works: {{artist.artwork}}</p>
      <button :id="artist.id" v-on:click="select($event), toggle = !toggle">Click to view/remove Artwork</button>
    </article> 
    </div>
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
            console.log(record);
            const name = record.people[0].name;
            return {
              artType: record.division,
              technique: record.technique,
              title: record.title,
              period: record.century,
              image: record.primaryimageurl,
              created: record.dateend,
              name: name
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
h1 {
  margin-top: 0.3rem;
}
.all-artwork-container {
  float: right;
  width: 50%;
}
.artist-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 2rem;
  margin-right: 0;
}
.pictures {
  width: 75%;
  float: right;
}
.art {
  overflow-y: scroll;
  height: 32rem;
  width: 20%;
  margin-right: 0;
  border-style: solid;
  border-width: 3px;
  border-color: sandybrown;
  position: sticky;
}
.image {
  width: 300px;
}
</style>
