import axios from "axios";

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID _UwWx1y91j1k1GCs--1spOBZwLXK73eYP0YymMNyGZI'
  }
});
