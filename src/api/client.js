import axios from 'axios';

const client = axios.create({
  baseURL: 'http://106.10.53.116:8099',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
