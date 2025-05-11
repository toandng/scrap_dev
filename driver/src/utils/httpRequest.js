import axios from "axios";

let isRefreshing = false;
let tokenListeners = [];
const httpRequest = axios.create({
  baseURL: "https://api01.f8team.dev/api",
});
httpRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const refreshToken = localStorage.getItem("refresh_token");
    const shouldRenewToken = error.response?.status === 401 && refreshToken;

    if (shouldRenewToken) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const res = await axios.post(
            `${"https://api01.f8team.dev/api"}/auth/refresh-token`,
            {
              refresh_token: refreshToken,
            }
          );
          const data = res.data.data;

          localStorage.setItem("token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
          tokenListeners.forEach((listener) => listener());
          tokenListeners = [];

          isRefreshing = false;

          return httpRequest(error.config);
        } catch (error) {
          isRefreshing = false;
          tokenListeners = [];
          localStorage.removeItem("token");
          localStorage.removeItem("refresh_token");

          return Promise.reject(error);
        }
      } else {
        return new Promise((resolve) => {
          tokenListeners.push(() => {
            resolve(httpRequest(error.config));
          });
        });
      }
    }
    return Promise.reject(error);
  }
);
const send = async (method, url, data, config) => {
  const isPutOrPatch = ["put", "patch"].includes(method.toLowerCase());
  const effectiveMethod = isPutOrPatch ? "post" : method;
  const effectivePath = isPutOrPatch
    ? `${url}${url.includes("?") ? "&" : "?"}_method=${method}`
    : url;

  const res = await httpRequest({
    method: effectiveMethod,
    url: effectivePath,
    data,
    ...config,
  });
  return res?.data;
};

export const get = (url, config) => send("get", url, null, config);
export const post = (url, data, config) => send("post", url, data, config);
export const put = (url, data, config) => send("put", url, data, config);
export const patch = (url, data, config) => send("patch", url, data, config);
export const del = (url, config) => send("delete", url, null, config);

export default {
  get,
  put,
  post,
  patch,
  del,
};
