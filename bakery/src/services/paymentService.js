import api from "../utils/axiosConfig";

export const paymentWithMomo = async (amount,method) => {
  try {
    const response = await api.post("/payment/Momo", {
      amounts: amount,
      method: method,
    });

    return response.data;
  } catch (error) {
    console.error("Lỗi khi thanh toán qua Momo:", error);
    throw error;
  }
};
export const paymentWithVnPay= async (order) => {
  try {
    const response = await api.post("/payment/VNPay", order);
    console.log('order', order)
    console.log('response', response)
    return response.data;
  } catch (error) {
    console.error("Lỗi khi thanh toán qua VNPay:", error);
    throw error;
  }
};