<template>
  <div>
  <div class="hello">
     <div class="art">
    <article v-for="dutch in dutchArtists" :key="dutch.id" class="artist-container">
      <h2>{{dutch.name}}</h2>
      <p>Number of Works: {{dutch.artwork}}</p>
      <button class="view-btn" :id="dutch.id" v-on:click="select($event)">View Artwork</button>
    </article>
  </div>
     <div class="pictures">
      <div v-for='art in uniqueArt' :key="art.id" v-bind:class="[uniqueArt]" v-show='toggle' class="all-artwork-container">
        <h2>{{art.name}}</h2>
        <p class="art-title">{{art.title}}</p>
        <p>{{art.technique}}</p>
        <p>{{art.period}}</p>
        <img :src="art.image" alt="no images found" class="image">
      </div>
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
  }
};
</script>

<style scoped>
h1 {
  margin-top: 0.3rem;
}
h2 {
  margin-bottom: 0;
  margin-top: 0.4rem;
}
.all-artwork-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  margin-left: 0.5rem;
}
.artist-container {
  display: flex;
  flex-direction: column;
  height: 9rem;
  margin-right: 0;
  margin-bottom: 1rem;
  border-bottom: solid slategray 5px;
}
p {
  margin-bottom: 0;
  margin-top: 0.4rem;
}
.art-title {
  font-weight: bolder;
  margin-bottom: 0.5rem;
}
.pictures {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.view-btn {
  width: 6rem;
  margin: auto;
}
.art {
  overflow-x: scroll;
  height: 17rem;
  width: 20%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-style: solid;
  border-width: 6px;
  border-color: slategray;
  background-color: mintcream;
  border-radius: 20px;
  position: sticky;
}
.image {
  width: 450px;
  height: 450px;
  margin-top: 2rem;
  margin: auto;
  padding-bottom: 8rem;
}
</style>