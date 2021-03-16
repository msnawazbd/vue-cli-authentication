import axios from 'axios'

export default axios.create({
    baseURL: 'http://blogapi.clustercoding.com/api',
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('token')
    }
})