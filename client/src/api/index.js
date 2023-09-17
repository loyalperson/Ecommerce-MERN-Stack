import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3002/' });
// const API = axios.create({ baseURL: 'https://ecommerce-gjorgjioski.herokuapp.com/' });

// AUTH APIs
export const logIn = (formData) => API.post('/user/login', formData);
export const createAdmin = (formData) => API.post('/user/addAdmin', formData);

// PRODUCT APIs

    // GET APIS
export const getProduct = (id) => API.get(`/product/${id}`);
export const getProducts = () => API.get('/product/get-all-products');
export const searchProduct = ({ gender, size, selection }) => API.get(`/product/search?gender=${gender}&size=${size}&collection=${selection}`);

    // POST APIs
export const createProduct = (product) => API.post('/product/create-product', product);
export const updateProduct = (id, updatedProduct) => API.patch(`/product/${id}`, updatedProduct)
export const deleteProduct = (id) => API.delete(`/product/${id}`)
