import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1",
});

export const postRegister = async (data) => {
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

export const postLogin = async (data) => {
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
  const token = await AsyncStorage.getItem("userToken");

  try {
    const response = await api.get("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
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
  const token = await AsyncStorage.getItem("userToken");

  try {
    const response = await api.get("/transactions", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    if (err.response.status === 500) {
      console.error(err.response.data);
      throw new Error("Failed to fetch transactions");
    }

    return err.response.data;
  }
};

export const postCreateTransaction = async (data) => {
  const token = await AsyncStorage.getItem("userToken");

  try {
    const response = await api.post("/transactions", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    if (err.response.status === 500) {
      console.error(err.response.data);
      throw new Error("Failed to create transaction");
    }

    return err.response.data;
  }
};
