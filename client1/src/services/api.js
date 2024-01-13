import axios from "axios";
// , {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";

const getBaseUrl = () => {
    let url = "http://localhost:8000/api/";
    return url;
}

const instance = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        "Content-Type": "application/json",
    }
});
export default instance;