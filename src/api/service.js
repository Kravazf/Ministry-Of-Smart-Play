import axios from 'axios';

export default axios.create({
  baseURL: 'https://64f45677932537f4051a44f6.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});
