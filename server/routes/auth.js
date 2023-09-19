const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register", async(req,res)=>{
    const newUser = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
        cPassword: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
    })
    try{
        const saveUser = await newUser.save()
        res.status(201).json(saveUser)
    }catch(err){
        res.status(500).json(err)
    }
})

//LOGIN
router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne(
            {
                username : req.body.username
            }
        )
            !user && res.status(401).json("Wrong User Name!")
            const hashedPassword = CryptoJS.AES.decrypt(
                user.password,
                process.env.PASS_SEC
            )

            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
            const inputPassword  = req.body.password
            originalPassword != inputPassword && res.status(401).json("Wrong password!")

            const accessToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin
                },
                process.env.JWT_SEC,
                {expiresIn:"3d"}
            )

            const { ...others} = user._doc
            res.status(200).json({...others,accessToken})

    }catch(err){
        res.status(500).json(err) 
    }
})

module.exports = router