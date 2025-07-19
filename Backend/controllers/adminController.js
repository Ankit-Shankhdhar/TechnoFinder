import bcrypt from "bcrypt";
import validator from "validator";
import { v2 as cloudinary } from "cloudinary";
import techModel from '../models/TechModels.js';
import jwt from 'jsonwebtoken'


// API for adding technicians
const addTech = async (req,res) => {
    
    try {
        const {name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile=req.file
        
// check for all data to add Technicians
        if(!name|| !email || !password || !speciality|| !degree || !experience || !about || !fees || !address){
            return res.json({success:false,message:"Missing details"})
        }

// email verification
        if (!validator.isEmail(email.trim())) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

// strong password verification
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

// Hashing Tech passwords
        const salt=await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

// upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const techData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newTechnician = new techModel(techData)
        await newTechnician.save()

        res.json({success:true,message:"Technician Added"})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        
    }
}
    // API for admin login 
    const loginAdmin = async (req,res) => {

    
    try {
        const {email, password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }
        
    } catch (error) {
        
    }
    

}


export {addTech, loginAdmin}