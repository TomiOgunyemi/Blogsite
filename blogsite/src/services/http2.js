import axios from 'axios'

const http2 = axios.create({
     baseURL: 'https://newsapi.org/v2'
    
})

export default http2