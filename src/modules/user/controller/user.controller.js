import userModel from "../../../../DB/Models/User.model.js";
import blogModel from './../../../../DB/Models/Blog.model.js';

export const getAllUsers=async (req,res)=>{
   try{
    const users=await userModel.findAll({
        include:{model:blogModel}
    });
    return res.json({message:'success',users});}
    catch(err){
        console.log("error",err);
    }
    
}

export const updateUser=async(req,res)=>{
const {id}=req.params;
const {email}=req.body;
try{
const user= await userModel.update({email}, 
    {where:{id}});
    if(user[0]>0){
        return res.json({Message:"Success",user});
    }else{
        return res.json({Message:"Invalid Id"});
    }

} catch(err){
return res.json({Message:"Error",error:err.stack});

}
}

export const deleteUser=async(req,res)=>{
 const {id}=req.params;
 try{
 const user=await userModel.destroy({where:{id}});
 if(user){
return res.json({Message:"Success",user});
 } else{
return res.json({Message:"Invalid id"});
  
 }
 }catch(err){
return res.json({Message:"Error",error:err.stack});
 }

}
