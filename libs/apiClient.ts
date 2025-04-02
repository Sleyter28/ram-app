import axios, { AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL, // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRequest = async <T>(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?: any): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient({
      method,
      url,
      data,
    });
  
    return response.data;
};