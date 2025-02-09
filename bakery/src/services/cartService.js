import api from "../utils/axiosConfig";

export const addCart = async (userId, productId, quantity) => {
  try {
    const response = await api.post("/carts/add",{userId, productId, quantity});
    return response.data;
  } catch (error) {
    console.error("Error when taking the product:", error);
    throw error;
  }
};
export const getCartById = async (id) => {
  try {
    const response = await api.get(`/carts/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error when taking the product:", error);
    throw error;
  }
};
export const deleteCartById = async (id) => {
  try {
    const response = await api.delete(`/carts/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error when taking the product:", error);
    throw error;
  }
};
