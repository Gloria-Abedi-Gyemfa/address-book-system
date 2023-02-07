import axios from "axios"
export default ()  => {
    return axios.create({
        baseURL: 'https://address-book-system.onrender.com/api/v1/',
        headers: {
            Accept: 'Application/json',
          'Content-Type': 'Application/json',
        }
      })
} 
//   const api = new instance
//   export default api