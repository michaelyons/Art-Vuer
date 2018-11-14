import axios from "axios";

export default {
  getAmericanArtists() {
    return axios
      .get(
        `/person?q=culture:American&size=100&apikey=${process.env.VUE_APP_KEY}`
      )
      .then(response => {
        return response.data.records;
      });
  }
};
