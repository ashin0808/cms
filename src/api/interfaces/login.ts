import http from "./../http";
import { HttpResponse } from "./../type";

interface loginData {
  user: string;
  password: string;
}

export const login = (data: loginData): Promise<HttpResponse> => {
  return http.post("", data);
};
