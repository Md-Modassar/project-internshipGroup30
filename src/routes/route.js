const express=require("express")
const router=express.Router()

const collegeValidator=require('../Middlewares/collegeValidator')
const collegeController=require('../controllers/collegeController')

router.post('/functionup/colleges',collegeValidator.collegeValidator,collegeController.createAuthor)
router.get("/functionup/collegeDetails",collegeController.getcollegedetails)

// router.post('/functionup/colleges',collegeController.createAuthor)

module.exports=router;