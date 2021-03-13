import http from '../http-common'

class UserDataServices {
    create(data){
        return http.post("/register", data)
    }

    login(data){
        return http.post("/login", data)
    }

    categories(){
        return http.get("/categories")
    }
}

export default new UserDataServices()