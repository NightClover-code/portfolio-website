//importing axios
import axios from 'axios';
//api base url
export const portfolioAPI = axios.create({
  baseURL: 'https://achrafdev-portfolio-api.herokuapp.com/',
});
