import axios from "axios";

export const GetAllProducts = () => axios.get('/product/get-all');