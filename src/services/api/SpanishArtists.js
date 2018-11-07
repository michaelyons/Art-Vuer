import axios from "axios";
import { key } from "../../variables";

export default {
  getSpanishArtists() {
    return axios
      .get(`/person?q=culture:Spanish&size=100&apikey=${key}`)
      .then(response => {
        return response.data.records;
      });
  }
};
