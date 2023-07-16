import axios from 'axios';

export const loginUser = data => axios.post('/login', data)
// .then(res => console.log(res))
// .catch(err => console.log(err));