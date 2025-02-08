import api from "../utils/axiosConfig";

export const getAllProduct = async () => {
  try {
    const response = await api.get("/products/");
    return response.data;
  } catch (error) {
    console.error("Error when taking the product:", error);
    throw error;
  }
};
