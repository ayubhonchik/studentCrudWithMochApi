import axios from "axios";

export const api = axios.create({
    baseURL: "https://6885d631f52d34140f6aad29.mockapi.io/blog"
})