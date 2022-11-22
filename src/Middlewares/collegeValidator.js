<<<<<<< HEAD
const collegeModel=require('../Models/collegeModel')
const collegeValidator=async (req,res,next)=>{
=======
// const collegeModel=require('')

const collegeValidator=(req,res,next)=>{
>>>>>>> 6fc8c86 (y)
    if(Object.keys(req.body).length==0){
        return res.status(404).send({status:false,message:"Request body is empty"})
    }
    const isValid=(field)=>{
        if(!req.body[field]){
             res.status(400).send({status:false,message:`${field} is not present`})
             return false
        }
        else if (!(typeof req.body[field]=='string')){ 
             res.status(400).send({status:false,message:`Please provide string for ${field}`})
             return false
        }
        else if(!req.body[field].match(/^[A-Za-z]+$/)){
             res.status(400).send({status:false,message:`Please provide a valid ${field}`})
             return false
        }

        else if(field=='name'){
            const lc=req.body[field].toLowerCase()
            if(lc!==req.body[field]){
                 res.status(400).send({status:false,message:`All characters in ${field} should be in lowercase`})
                 return false
            }
        }
        return true
    }

    const awsLinkValidator=(url)=>{
        if(!req.body[url]){
            res.status(400).send({status:false,message:"logoLink is not present"})
            return false
        }
        if(!(typeof req.body[url]=='string')){
            res.status(400).send({status:false,message:"logoLink should be string"})
            return false
        }
        
        
        else{
            const stat=req.body[url].match(/(http[s]:\/\/)([a-z\-0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-\/._~:?#\[\]@!$&'()+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i)
        if(!stat){
            res.status(400).send({status:false,message:"Invalid logoLink"})
            return false
        }
    }
    return true
    }


    
    
    if(!isValid("name")){
        return
    }
    if(!isValid("fullName"))
    return

    if(!awsLinkValidator("logoLink"))
    return 

    const collegeData=await collegeModel.find().select({_id:0,name:1/*,fullName:1*/})
    const name=collegeData.map(obj=>obj.name)
    // const fullname=collegeData.map(obj=>obj.fullName)

    if(name.includes(req.body.name)){
        return res.status(400).send({status:false,message:"Duplicate name"})
    }
    next()
        
}

module.exports.collegeValidator=collegeValidator