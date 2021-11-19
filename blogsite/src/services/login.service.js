import http from './http'
import http2 from './http2'


export function register(data){
    return http.post('/signup',data)
}

export function login(data){
    return http.post('/login',data)
}

export function addpost(data){
    return http.post('/addpost',data)
}

export function getPublished(){
    return http.get('/allpost')
}

export function deletePost(data){
    return http.post('/deletepost',data)
}

export function eachPost(id){
    return http.post(`/post?id=${id}`, null);
}

