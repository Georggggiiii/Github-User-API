import axios from 'axios';

const baseUrl = 'https://api.github.com';

export default {
  getUserData(searchRepo) {
    return axios.get(`${baseUrl}/users/${searchRepo}`);
  },
  getUserRepo(searchRepo) {
    return axios.get(`${baseUrl}/users/${searchRepo}/repos`);
  }
}