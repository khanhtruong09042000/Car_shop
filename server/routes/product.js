const router = require("express").Router()
const Product = require("../models/Product")
const {userConfirm, authConfirm, adminConfirm} = require("./userConfirm")

//CREATE PRODUCT
router.post("/",adminConfirm,async(req,res)=>{
    const newProduct = new Product(req.body)
    try{
        const saveProduct = await newProduct.save()
        res.status(200).json(saveProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE PRODUCT
router.delete("/delete/:id",adminConfirm,async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE PRODUCT
router.put("/update/:id",adminConfirm,async(req,res)=>{
    try{
        const updateProduct = await Product.findByIdAndUpdate(
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

//GET PRODUCT
router.get("/find/:id",async(req,res)=>{
    try{
        const findProduct = await Product.findById(req.params.id)
        const {...others} = findProduct._doc
        res.status(200).json({...others})
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL PRODUCT
router.get("/find",async(req,res)=>{
    try{
        const allProduct = await Product.find()
        res.status(200).json(allProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router