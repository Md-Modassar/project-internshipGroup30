const collegeModels=require("../Models/collegeModel")
const interModels=require("../Models/internModel")
const {isValid}=require("../Middlewares/InternValidator")



const createAuthor=async (req,res)=>{
    try{
    const data=req.body
    const createdData=await collegeModels.create(data)
    res.status(201).send({status:true,message:createdData})
}
catch(error){
    res.status(500).send({status:false,message:error.message})
}
}


const getcollegedetails=async function(req,res){
    const collegename=req.query.collegename

       if(!isValid(collegename))return res.status(400).send({status:false,msg:"please enter valide college name"})
          const els=collegename.toLowerCase()
       if(!collegename==els)
        {
            return res.status(400).send({status:false,satmsg:"it is not valid"})
        }
    
 const collegeid=await collegeModels.find({name:collegename})

 if(!collegeid){
    res.status(400).send({status:false,msg:"this is not valide college name"})
 } 
 const interns=await interModels.find({collegeId:collegeid[0]._id}).select({collegeid:0})

 if(!interns){
    return res.status(400).send({status:false, msg:"not found data"})
 }
 
 let data={
    name:collegeid[0].name,
    fullname:collegeid[0].fullName,
    logolink:collegeid[0].logoLink,
    interns:interns.length?interns:{msg:"data is not found"}

 }

 return res.status(200).send({data})
 

 
}

module.exports.createAuthor=createAuthor
module.exports.getcollegedetails=getcollegedetails




