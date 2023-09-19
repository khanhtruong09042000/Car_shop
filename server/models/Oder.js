const mongoose = require("mongoose")

const OderSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        products:[
            {
                productId:String,
            },
            {
                quanity:{
                    type:Number,
                    default:1
                }
            } 
        ],
        amount:{
            type:Number,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        status:{
            type:String,
            default:"pending"
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Oder",OderSchema)