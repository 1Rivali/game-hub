import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '72d4bdb3fc6b4b71a87f731c77af9d48',
  },
});
