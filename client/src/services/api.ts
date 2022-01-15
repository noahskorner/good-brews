import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

interface LoginPayload {
  email: String;
  password: String;
}
interface RegisterPayload {
  username: String;
  email: String;
  password1: String;
  password2: String;
}
interface RefreshTokenPayload {
  token: String;
}
interface BreweriesPayload {
  name: String;
  zip: String;
}

const login = (payload: LoginPayload) => {
  return apiClient.post("auth/login", payload);
};
const register = (payload: RegisterPayload) => {
  return apiClient.post("auth/register", payload);
};
const refreshToken = (payload: RefreshTokenPayload) => {
  return apiClient.post("auth/refresh-token", payload);
};
const logout = (accessToken: String) => {
  return apiClient.delete("auth/logout", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
const getBreweries = ({ name, zip }: BreweriesPayload) => {
  return apiClient.get(`breweries?name=${name}&zip=${zip}`);
};

const api = { login, register, refreshToken, logout, getBreweries };

export default api;
