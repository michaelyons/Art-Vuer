import axios from "axios";

export default {
  getAmericanArtists() {
    const key = process.env.VUE_APP_KEY;
    return axios
      .get(`/person?q=culture:American&size=100&apikey=${key}`)
      .then(response => {
        return response.data.records;
      });
  }
};
