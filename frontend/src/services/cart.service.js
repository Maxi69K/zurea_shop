import axios from 'axios';

export const Checkout = (payload) => axios.put('/cartshop/checkout', payload);