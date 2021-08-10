import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import toastService from "./toast";
import { LoginFormData } from "../pages/Login/utils";
export const baseRequest = async (
  { data = {}, method = "GET", url = "" }: AxiosRequestConfig,
  showMsg = false,
  showErr = true
) => {
  const baseUrl = url;
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    url: baseUrl,
    method,
    data,
  };
  console.log(data);
  try {
    return await Axios.request(config).then((res: AxiosResponse) => {
      if (res.status === 200) {
        return res.data;
      }
    });
  } catch (error: any) {
    toastService.notify("Tên đăng nhập hoặc mật khẩu không đúng", "error");
    console.log(`baseRequest error11 >>>`, error.response);
    return;
  }
};
export const loginRequest = (data: LoginFormData) =>
  baseRequest({
    url: "http://128.199.162.192:4000/oauth/login/admin",
    data: data,
    method: "POST",
  });

export const getAllReports = async ({
  data = {},
  method = "GET",
  url = "",
  params = "",
}: AxiosRequestConfig) => {
  const baseUrl = url;
  const tokenAuth = localStorage.getItem("token");
  const config = {
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      token: tokenAuth,
    },
    url: baseUrl,
    method,
    data,
    params,
  };
  console.log(config);
  try {
    return await Axios.request(config).then((res: AxiosResponse) => {
      if (res.status === 200) {
        return res.data;
      }
    });
  } catch (error: any) {
    // eslint-disable-next-line no-console
    toastService.notify("Lỗi hệ thống", "error");
    console.log(`baseRequest error11 >>>`, error.response);
    return;
  }
};
