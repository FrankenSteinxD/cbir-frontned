import axios from "axios";
import { API_URL } from "../config";

export const searchImages = (s = "") => axios.get(`${API_URL}/images?s=${s}`);
export const uploadImages = data => axios.post(`${API_URL}/images`, data);
export const searchByImage = data => axios.post(`${API_URL}/images/file`, data);
