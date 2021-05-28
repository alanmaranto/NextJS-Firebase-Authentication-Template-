import axios from "axios";
import firebase from "../firebase";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:4000/",
});

export const axiosAuth = axios.create({
  baseURL: "http://localhost:4000/",
});

axiosAuth.interceptors.request.use(
  async (config) => {
    let user = await firebase.auth().currentUser;
    config.headers.token = user ? await user.getIdToken(true) : "";
    return config;
  },
  (err) => {
    return Promise.reject(error);
  }
);
