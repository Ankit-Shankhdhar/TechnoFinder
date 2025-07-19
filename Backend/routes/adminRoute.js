import express from 'express';
import { addTech, loginAdmin } from '../controllers/adminController.js';
import upload from '../middleware/multer.js';

const adminRouter= express.Router()

adminRouter.post('/add-technician' ,upload.single('image'), addTech)
adminRouter.post('/login' ,loginAdmin)

export default adminRouter;
