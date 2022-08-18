import axios from "axios";

const requests = axios.create({ baseURL: 'https://dogbreed-api.q9.com.br' })

export default requests;