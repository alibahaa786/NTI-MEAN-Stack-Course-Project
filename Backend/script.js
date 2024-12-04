const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./utili/config/db.js');
const productRouter = require('./routes/productRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const cartRouter = require('./routes/cartRoutes.js');
const port = 3000;

app.use(cors());
app.use(express.json());
connectDB();


app.use('/products',productRouter);
app.use('/', userRouter);
app.use('/cart', cartRouter);

app.listen(port, ()=>console.log(`Listening to port ${port}`));