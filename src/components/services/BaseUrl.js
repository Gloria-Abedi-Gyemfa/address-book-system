import axios from "axios"

const instance = axios.create({
    baseURL: 'https://address-book-system.onrender.com/api/v1/auth/'
});
export default instance;