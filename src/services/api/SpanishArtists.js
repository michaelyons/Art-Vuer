import axios from "axios";

export default {
  getSpanishArtists() {
    return axios
      .get(
        `/person?q=culture:Spanish&size=100&apikey=${process.env.VUE_APP_KEY}`
      )
      .then(response => {
        return response.data.records;
      });
  }
};
