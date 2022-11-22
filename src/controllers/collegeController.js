
const collegeModel=require('../Models/collegeModel')

const createAuthor=async (req,res)=>{
    try{
    const data=req.body
    const createdData=await collegeModel.create(data)
    res.status(201).send({status:true,message:createdData})
}
catch(error){
    res.status(500).send({status:false,message:error.message})
}
}

module.exports.createAuthor=createAuthor
