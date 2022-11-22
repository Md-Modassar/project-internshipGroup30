const collegeModels=require("../Models/collegeModel")
const interModels=require("../Models/internModel")




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






const getcollegedetails=async function(req,res){
    const collegename=req.query.collegename
    if(!collegename)
    {return res.status(400).send({msg:"please enter collegename in query params"})
    }
    if(collegename=="")  {
            return res.status(400).send({status:false, msg:"please enter college in correct formment"})
        }
        if(!collegename==toLowerCase())
        {
            return res.status(400).send({msg:"it is not valid"})
        }
    
 const collegeid=await collegeModels.find({name:collegename})
 //const {name,fullname,logolink}=collegeid[0]
 //console.log(collegeid[0].fullName)
 if(!collegeid){
    res.status(400).send({status:false,msg:"this is not valide college name"})
 } 
 const interns=await interModels.find({collegeId:collegeid[0]._id}).select({collegeid:0})
//console.log(interns)
 if(!interns){
    return res.status(400).send({status:false, msg:"not found data"})
 }
 //console.log({d:"+++++++++++",msg:collegeid.name})
 let data={
    name:collegeid[0].name,
    fullname:collegeid[0].fullName,
    logolink:collegeid[0].logoLink,
    interns:interns.length?interns:{msg:"data is not found"}

 }

 return res.status(200).send({data})
 
//  const getnewdata=await collegeModels.find({_id:collegeid._id})//{$set:{interns:recodeofinstershipdetails}},{upsert:true},{new:true})
//   console.log(getnewdata)
//  if(getnewdata.length==0){
//     return res.status(400).send({status:false,msg:"data not found"})
//  }
//  return res.status(201).send({status:true,msg:getnewdata})
 
}

module.exports.createAuthor=createAuthor
module.exports.getcollegedetails=getcollegedetails




