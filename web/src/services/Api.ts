import axios from "axios";

export const Api = axios.create({
    baseURL: "http://"+window.location.hostname+":8080/",
})