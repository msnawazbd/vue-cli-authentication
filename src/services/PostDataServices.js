import http from '../http-common'

class PostDataServices {
    posts(){
        return http.get("/posts")
    }

    create(data){
        return http.post("/posts", data)
    }
}

export default new PostDataServices()