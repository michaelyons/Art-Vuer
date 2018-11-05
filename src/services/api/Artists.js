import axios from "axios";
import { key } from "../../variables";

export default {
  getArtists() {
    return axios.get(`/person?size=100&apikey=${key}`).then(response => {
      return response.data.records;
    });
  }
};
