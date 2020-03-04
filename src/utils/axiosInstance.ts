import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io'
});
