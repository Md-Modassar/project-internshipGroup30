const request = require('request')
function test(fn){  
// Request URL
// var url = '1234';
var url="https://functionup-stg.s3.ap-south-1.amazonaws.com/thorium/iitd.png"
 
request(url, (error, response, body)=>{

    if(error) fn(false)
  
    if(response){
        if(response.statusCode==200)
        fn(true)
        else
        fn(false)
    }
     
    
});
}


test((data)=>console.log(data))

// const axios=require('axios')

// async function test(){
// const options={
//     method:"post",
//     url:"https://functionup-stg.s3.ap-south-1.amazonaws.com/thorium/iitd.png"
// }

// const result=await axios(options)
// console.log(result.data)
// }
// test()