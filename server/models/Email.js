const mongoose = require("mongoose")

const emailSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        comment:{
            type:String,
            default:""
        }
    },{
        timestamps:true
    } 
)

module.exports = mongoose.model("Email",emailSchema)