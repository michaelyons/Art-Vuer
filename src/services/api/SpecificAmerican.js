import axios from "axios";
import { key } from "../../variables";

export default {
  getAmericanArtist(targetId) {
    return axios
      .get(
        `https://api.harvardartmuseums.org/object?person=${targetId}&apikey=${key}`
      )
      .then(response => {
        return response.data;
      });
  }
};
