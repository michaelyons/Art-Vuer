import axios from "axios";

export default {
  getSpecificArtist(targetId) {
    return axios
      .get(
        `https://api.harvardartmuseums.org/object?person=${targetId}&apikey=${
          process.env.VUE_APP_KEY
        }`
      )
      .then(response => {
        return response.data;
      });
  }
};
