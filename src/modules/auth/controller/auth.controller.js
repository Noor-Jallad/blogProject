import userModel from "../../../../DB/Models/User.model.js";
export const signIn=async (req,res)=>{
    const {email,password}= req.body;
    const signInCheck = await userModel.findAll({
        where:{
            email:email,
            password:password
        }
    })
    if(!signInCheck.length){
        return res.json({Message: "Email Or Password is Incorrect!"})
    } 
    else{
        res.json({Message:"Success"});
    }
}
export const signUp=async (req,res)=>{
try{
const {name, email, password}=req.body;
const user=await userModel.create({name,email,password});
return res.json({Message: "Success"});
}
catch(err){
    if(err.original?.errno == 1062){
        return res.json({Message:"Email already exists!"})
    }
    return res.json({Message:"Catch Error",stack:err.stack});
}
}
export const getAuth=(req,res)=>{
    res.json({Message:'Auth'});
   }
