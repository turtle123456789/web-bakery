const { createPaymentMoMo, createPaymentVNPay } = require('../services/paymentService');

const paymentControllerMoMo = async (req, res) => {
    try {
        const { amounts, method,userid } = req.body;
        if (!amounts || !method) {
            return res.status(400).json({ status: "error", message: "Thiếu thông tin thanh toán" });
        }
        
        const result = await createPaymentMoMo(amounts, method,userid);
        res.json({ status: "success", message: "Thanh toán thành công", link: result.link });

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }

};

const paymentControllerVNPay = async (req, res) => {

    try {
        const result = await createPaymentVNPay(req);
        console.log('result', result)
        res.json({ status: "success", message: "Thanh toán thành công", link: result });

    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }

};

module.exports = { paymentControllerMoMo, paymentControllerVNPay };
