import axios from "axios";

export default {
  getDutchArtists() {
    return axios
      .get(`/person?q=culture:Dutch&size=100&apikey=${process.env.VUE_APP_KEY}`)
      .then(response => {
        return response.data.records;
      });
  }
};
