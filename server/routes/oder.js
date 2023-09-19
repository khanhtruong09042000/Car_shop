const router = require("express").Router()
const Oder = require("../models/Oder")
const {userConfirm, authConfirm, adminConfirm} = require("./userConfirm")

//CREATE ODER
router.post("/",userConfirm, async(req,res)=>{
    const newOder = new Oder(req.body)
    try{
        const saveOder = await newOder.save()
        res.status(200).json(saveOder)
    }catch(err){ 
        res.status(500).json(err)
    }
})

//DELETE ODER
router.delete("/delete/:id",adminConfirm,async(req,res)=>{
    try{
        await Oder.findByIdAndDelete(req.params.id)
        res.status(200).json("Oder has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE ODER
router.put("/update/:id",adminConfirm,async(req,res)=>{
    try{
        const updateProduct = await Oder.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        )
        res.status(200).json(updateProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET USER ODER
router.get("/find/:userId",adminConfirm,async(req,res)=>{
    try{
        const findProduct = await Oder.find({userId: req.params.userId})
        res.status(200).json(findProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL ODER
router.get("/find",adminConfirm , async(req,res)=>{
    try{
        const allProduct = await Oder.find()
        res.status(200).json(allProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ODER STATS
router.get("/stats",adminConfirm,async(req,res)=>{
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))
    try{
        const data = await Oder.aggregate([
            {$match: {createdAt: {$gte: previousMonth}}},
            {
                $project:{
                    month: {$month: "$createdAt"},
                    sales: "$amount"
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum: "$sales"}
                }
            }
        ])
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router