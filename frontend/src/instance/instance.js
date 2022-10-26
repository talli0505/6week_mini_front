import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;

//get요청 인증값 필요 없는 경우
const axiosApi = (url, options) => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: BASE_URL,
    header: {
      "Content-Type": `application/json`,
      Authorization: `Bearer ${token}`,
    },
  });
  return instance;
};

//post, delete 등 인증값 필요한 경우
const axiosAuthApi = (url, options) => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    header: {},
  });
  return;
};
