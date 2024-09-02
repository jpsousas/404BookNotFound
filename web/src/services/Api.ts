import axios from "axios";

export const Api = axios.create({
    baseURL: "https://expert-capybara-qw4j99v69pg3xxg5-8080.app.github.dev/"
    // baseURL: "http://localhost:8080/",
})