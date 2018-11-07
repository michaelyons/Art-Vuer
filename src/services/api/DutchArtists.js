import axios from "axios";
import { key } from "../../variables";

export default {
  getDutchArtists() {
    return axios
      .get(`/person?q=culture:Dutch&size=100&apikey=${key}`)
      .then(response => {
        return response.data.records;
      });
  }
};
