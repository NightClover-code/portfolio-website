//importing axios
import axios from 'axios';
//api base url
export const portfolioAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
});
