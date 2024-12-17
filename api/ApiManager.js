import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const token = AsyncStorage.getItem("userToken");

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : null,
  },
});

export const register = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (err) {
    if (err.response.status === 500) {
      console.error(err.response.data);
      throw new Error("Failed to register");
    }

    return err.response.data;
  }
};

export const login = async (data) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (err) {
    if (err.response.status === 500) {
      console.error(err.response.data);
      throw new Error("Failed to login");
    }

    return err.response.data;
  }
};

export const fetchUser = async () => {
  try {
    const response = await api.get("/users/me");
    return response.data;
  } catch (err) {
    if (err.response.status === 500) {
      console.error(err.response.data);
      throw new Error("Failed to fetch user");
    }

    return err.response.data;
  }
};

export const fetchUserTransactions = async () => {
  try {
    const response = await api.get("/transactions");
    return response.data;
  } catch (err) {
    if (err.response.status === 500) {
      console.error(err.response.data);
      throw new Error("Failed to fetch transactions");
    }

    return err.response.data;
  }
};

export const createTransaction = async (data) => {
  try {
    const response = await api.post("/transactions", data);
    return response.data;
  } catch (err) {
    if (err.response.status === 500) {
      console.error(err.response.data);
      throw new Error("Failed to create transaction");
    }

    return err.response.data;
  }
};
