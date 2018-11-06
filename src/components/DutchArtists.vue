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
    <article v-for="dutch in dutchArtists" :key="dutch.id">
      <h2>{{dutch.name}}</h2>
      <p>Number of Works: {{dutch.artwork}}</p>
      <button :id="dutch.id" v-on:click="select($event)">View Artwork</button>
    </article>
  </div>
   </div>
  </div>
</template>

<script>
import GetDutchArtistsApi from '@/services/api/DutchArtists';
import GetSpecificDutchArtist from '@/services/api/SpecificArtist';
export default {
  name: 'DutchArtists',
  data() {
    return {
      dutchArtists: [],
      toggle: true,
      uniqueArt: []
    };
  },
  methods: {
    select: function(event) {
      const targetId = event.target.id;
      GetSpecificDutchArtist.getSpecificArtist(targetId)
        .then(data => {
          const uniqueArtwork = data.records.map(record => {
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
