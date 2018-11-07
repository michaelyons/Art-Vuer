import axios from "axios";

export default {
  getDutchArtists() {
    const key = process.env.VUE_APP_KEY;
    return axios
      .get(`/person?q=culture:Dutch&size=100&apikey=${key}`)
      .then(response => {
        return response.data.records;
      });
  }
};
