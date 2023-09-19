const router = require("express").Router()
const Email = require("../models/Email")

//SEND EMAIL
router.post("/",async(req,res)=>{
    const newEmail = new Email(req.body)
    try{
        const saveEmail = await newEmail.save()
        res.status(200).json(saveEmail)
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE EMAIL
router.delete("/delete/:id",async(req,res)=>{
    try{
        await Email.findByIdAndDelete(req.params.id)
        res.status(200).json("Email has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router 