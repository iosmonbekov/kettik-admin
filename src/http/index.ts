import axios from 'axios'

const instance = axios({
    baseURL: 'http://localhost:8080/'
})

export { instance }
