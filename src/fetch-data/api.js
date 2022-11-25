import axios from "axios";

const Api = axios.create({
    baseURL: "https://kopili-api.fly.dev/"
});


export default Api;