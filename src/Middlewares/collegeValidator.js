// const collegeModel=require('')
const request=require('request')
const collegeValidator=(req,res,next)=>{
    if(Object.keys(req.body).length==0){
        return res.status(404).send({status:false,message:"Request body is empty"})
    }
    const isValid=(field)=>{
        if(!req.body[field]){
             res.status(400).send({status:false,message:`${field} is not present`})
             return false
        }
        else if (!typeof req.body[field]=='string'){ 
             res.status(400).send({status:false,message:`Please provide string for ${field}`})
             return false
        }
        // else if(!req.body[field].match(/^[A-Za-z]+$/)){
        //      res.status(400).send({status:false,message:`Please provide a valid ${field}`})
        //      return false
        // }

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
            res.status(400).send({status:false,message:"logoLink not present"})
            return false
        }
        
        const stat=req.body[url].match(/(http[s]:\/\/)([a-z\-0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-\/._~:?#\[\]@!$&'()+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i
        )
        if(!stat){
            res.status(400).send({status:false,message:"Invalid aws link"})
            return false
        }
        return true
    }
    
    if(!isValid("name")){
        return
    }
    if(!isValid("fullname"))
    return

    if(!awsLinkValidator("logoLink"))
    return 

    next()
        
}

module.exports.collegeValidator=collegeValidator