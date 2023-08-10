import axios from 'axios';

export const UserProducts = (id) => axios.get(`/user/products/${id}`);

export const activateAccount = (id) => axios.get(`/user/activate-account/${id}`);