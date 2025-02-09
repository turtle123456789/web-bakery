const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const registerService = async (username, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return {status: "error", message: 'Email đã tồn tại ' };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return {status: "success", message: 'Đăng ký thành công' };
};
const loginService = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        return {status: "error", message: 'Email hoặc mật khẩu không đúng ' };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return {status: "error", message: 'Email hoặc mật khẩu không đúng ' };
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return { token, user: {userId:user._id,  username: user.username, email: user.email },message:"Đăng nhập thành công",status: "success" };
   
}

module.exports = {
    registerService,
    loginService,
};
