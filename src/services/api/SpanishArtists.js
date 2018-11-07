import axios from "axios";

export default {
  getSpanishArtists() {
    const key = process.env.VUE_APP_KEY;
    return axios
      .get(`/person?q=culture:Spanish&size=100&apikey=${key}`)
      .then(response => {
        return response.data.records;
      });
  }
};
