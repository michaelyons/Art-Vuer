import Vue from 'vue';
import { key } from '../../variables';

export default {
  getArtists() {
    return Vue.http.get(`/api.harvardartmuseums.org/person?apikey=${key}`);
  }
};
