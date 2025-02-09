const express = require('express')
const cors = require('cors');
const mongoose = require("mongoose");
const paymentRouter = require('./routes/paymentRoutes');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const cartRouter = require('./routes/cartRoutes');
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));
const PORT = process.env.PORT || 5000;
app.use('/user', userRouter);
app.use('/products', productRouter);
app.use('/carts', cartRouter);
app.use('/payment', paymentRouter);

app.listen(2006, ()=>{
    console.log(`Server running on port ${PORT}`)
})