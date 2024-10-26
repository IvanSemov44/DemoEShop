import axios from "axios";
import authHeader from "./auth-Header";

const API_URL = "https://localhost:7117/api";

export const getCompanies = () => {
  return axios.get(API_URL + "/companies");
};

export const getCompaniesWithAuth = () => {
  return axios.get(API_URL + "/companies", {
    headers: authHeader(),
  });
};
