import axios from "axios";
import { key } from "../../variables";

export default {
  getAmericanArtists() {
    return axios
      .get(`/person?q=culture:American&size=100&apikey=${key}`)
      .then(response => {
        return response.data.records;
      });
  }
};