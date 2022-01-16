import axios from "axios";

const baseURL = "https://good-brews-server.herokuapp.com/api/";

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

export const login = (payload: LoginPayload) => {
  return apiClient.post("auth/login", payload);
};
export const register = (payload: RegisterPayload) => {
  return apiClient.post("auth/register", payload);
};
export const refreshToken = (payload: RefreshTokenPayload) => {
  return apiClient.post("auth/refresh-token", payload);
};
export const logout = (accessToken: String) => {
  return apiClient.delete("auth/logout", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
export const getBreweries = ({ name, zip }: BreweriesPayload) => {
  return apiClient.get(`breweries?name=${name}&zip=${zip}`);
};
export const getBrewery = (id: string) => {
  return apiClient.get(`breweries/${id}`);
};
