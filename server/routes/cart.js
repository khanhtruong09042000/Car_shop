const router = require("express").Router()
const Cart = require("../models/Cart")
const {userConfirm, authConfirm, adminConfirm} = require("./userConfirm")

//CREATE CART
router.post("/",userConfirm,async(req,res)=>{
    const newCart = new Cart(req.body)
    try{
        const saveCart = await newCart.save()
        res.status(200).json(saveCart)
    }catch(err){
        res.status(500).json(err)
    }
})
 
//DELETE CART
router.delete("/delete/:id",authConfirm,async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE CART
router.put("/update/:id",authConfirm,async(req,res)=>{
    try{
        const updateProduct = await Cart.findByIdAndUpdate(
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

//GET USER CART
router.get("/find/:userId",adminConfirm,async(req,res)=>{
    try{
        const findProduct = await Cart.find({userId: req.params.userId})
        res.status(200).json(findProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL CART
router.get("/find",adminConfirm , async(req,res)=>{
    try{
        const allProduct = await Cart.find()
        res.status(200).json(allProduct)
    }catch(err){
        res.status(500).json(err)
    }
})
  

module.exports = router 
