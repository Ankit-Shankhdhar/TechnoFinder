import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'

//app Config

const app = express()
const port = process.env.PORT || 5000
connectDB()
connectCloudinary()

//middlewares

app.use(express.json())
app.use(cors())

//api end points

app.use('/api/admin',adminRouter)
// Localhost:5000/api/admin/add-technician

app.get('/',(req,res)=>{    
    res.send("API WORKING ")
})

app.listen(port , ()=>console.log("SERVER STARTED",port ))