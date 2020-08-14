import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.2.6:4000",
});

export default apiClient;
