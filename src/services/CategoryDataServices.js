import http from '../http-common'

class CategoryDataServices {
    categories(){
        return http.get("/categories")
    }

    create(data){
        return http.post("/categories", data)
    }
}

export default new CategoryDataServices()