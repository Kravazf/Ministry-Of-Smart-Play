import axios from 'axios';

export default axios.create({
  baseURL: 'https://653a5a3ce3b530c8d9e98b82.mockapi.io/api/v2/',
  headers: { 'Content-Type': 'application/json' },
});
