import axios from "axios";

export const GetAllProducts = () => axios.get('/product/get-all');

export const GetTopTwoProducts = () => axios.get('/product/topTwo');

export const SearchProducts = (searchParams) => axios.post('/product/search', {searchParams: searchParams});