import axios from 'axios';

export const UserProducts = id => axios.get(`/user/products/${id}`);