const { loginService, registerService } = require("../services/userServices");

const registerController = async (req, res) => {
    try {   
        const { username, email, password } = req.body;
        const result = await registerService( username, email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};
const loginController = async (req, res) => {
    try {   
        const {  email, password } = req.body;
        const result = await loginService(  email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};
module.exports = { 
    registerController,
    loginController
};
