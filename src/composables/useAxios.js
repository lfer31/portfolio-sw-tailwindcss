import Axios from 'axios'

export const useAxios = () => {
    const axios = Axios.create({
        baseURL: 'https://akabab.github.io/starwars-api/api',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    
    return axios
}

