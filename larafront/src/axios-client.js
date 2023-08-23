import axios from 'axios';
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    // const token = localStorage.getItem('token')
    const token = localStorage.get('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

axiosClient.interceptors.response.use((response) => {

    return response;
}, (error) => {
    // Handle errors
    const {response} =  error
    if(response.status === 401){
        localStorage.removeItem('ACCESS_TOKEN')
        // window.location.href = "/login"
    }
    throw error;
});

export default axiosClient;
