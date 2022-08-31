import axios from "axios";

export const api = axios.create({
  baseURL: "projetoblue-hamburgueria-api-production.up.railway.app",
});
