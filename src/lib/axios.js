import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'backend',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
