import http from '../http-common'

class UserDataServices {
    create(data){
        return http.post("/register", data)
    }

    login(data){
        return http.post("/login", data)
    }

    user(){
        return http.get("/user")
    }
}

export default new UserDataServices()