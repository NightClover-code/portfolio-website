//importing axios
import axios from 'axios';
//api base url
export const portfolioAPI = axios.create({
  baseURL: 'https://achraf-portfolio-strapi-api.herokuapp.com/',
});
