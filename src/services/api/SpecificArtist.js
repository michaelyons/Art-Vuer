import axios from "axios";

export default {
  getSpecificArtist(targetId) {
    const key = process.env.VUE_APP_KEY;
    return axios
      .get(
        `https://api.harvardartmuseums.org/object?person=${targetId}&apikey=${key}`
      )
      .then(response => {
        return response.data;
      });
  }
};
