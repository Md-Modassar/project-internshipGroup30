const express=require("express")
const router=express.Router()

const collegeValidator=require('../Middlewares/collegeValidator')
const collegeController=require('../controllers/collegeController')

router.post('/functionup/colleges',collegeValidator.collegeValidator,collegeController.createAuthor)

// router.post('/functionup/colleges',collegeController.createAuthor)

module.exports=router;