import axios from "axios";

const API_URL = "https://localhost:7117/api/authentication";

export const register = (
  firstname: string,
  lastname: string,
  username: string,
  password: string,
  email: string,
  phonenumber: string
) => {
  return axios.post(API_URL, {
    firstname,
    lastname,
    username,
    password,
    email,
    phonenumber,
  });
};

export const login = async (username: string, password: string) => {
  const response = await axios
        .post(API_URL + "/login", {
            username,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};
