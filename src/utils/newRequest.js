import axios from "axios";

const newRequest = axios.create({
//  baseURL: "http://localhost:8000/api",
// https://demo-deploy-api.vercel.app/
// https://my-deeds-backend.onrender.com/api
//  baseURL: "https://demo-deploy-api.vercel.app/api",
baseURL: "https://my-deeds-backend.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
