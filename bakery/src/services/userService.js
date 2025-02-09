import api from "../utils/axiosConfig";

export const login = async (email,password) => {
  try {
    const response = await api.post("/user/login",{email,password});
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const register = async (username, email,password) => {
    try {
      const response = await api.post("/user/register",{username, email,password});
      return response.data;
    } catch (error) {
      throw error;
    }
  };