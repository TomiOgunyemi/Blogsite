// import http from './http'
import http2 from './http2'


export function getNews(){
    return http2.get('/everything?q=medical&from=2021-10-26&sortBy=publishedAt&apiKey=4680111d55ef4139bced82f06f8cc8f1')
}

export function getHealthNews(){
    return http2.get('/everything?q=covid&from=2021-10-26&sortBy=publishedAt&apiKey=4680111d55ef4139bced82f06f8cc8f1')
}

