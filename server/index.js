const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const productRouter = require("./routes/product")
const cartRouter = require("./routes/cart")
const oderRouter = require("./routes/oder")
const emailRouter = require("./routes/email")
const stripeRouter = require("./routes/stripe")
const cors = require("cors")

const app = express()
 
dotenv.config()

mongoose
    .connect(process.env.MONGOOSE_URL)
    .then(() => console.log("Connectting Mongoose BD !"))
    .catch((err) => {
        console.log(err);
    }) 

app.use(cors())    
app.use(express.json())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/oder",oderRouter)
app.use("/api/email",emailRouter) 
app.use("/api/checkout",stripeRouter)   

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running!");
})
      