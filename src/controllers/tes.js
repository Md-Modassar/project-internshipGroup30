<<<<<<< HEAD


=======
const collegeModell=require("../Models/collegeModel")


const getcollegedetails=async function(req,res){
    const collegename=req.require
    if(!collegename=="" ||collegename)
    {
        if(!collegename=="string"||!collegename.lowercase()==true)
        {
            return res.status(400).send({status:false, msg:"please enter college in correct formment"})
        }
    }
 const collegeid=await collegeModell.find({name:collegename})
 if(!collegeid){
    res.status(400).send({status:false,msg:"this is not valide college name"})
 } 
 const recodeofinstershipdetails=await interModels.find(collegeid)
 const getnewdata=await collegeModell.find(collegeid).update({$set:{interns:recodeofinstershipdetails}},{Upset:true},{new:true})
 if(!getnewdata){
    res.status(400).send({status:false,msg:"data not found"})
 }
  res.status(201).send({status:true,data:getnewdata})
 
}
>>>>>>> c1bf7e6 (y)
