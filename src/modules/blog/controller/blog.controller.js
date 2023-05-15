import blogModel from "../../../../DB/Models/Blog.model.js";
import userModel from "../../../../DB/Models/User.model.js";

export const getAllBlogs=async(req,res)=>{
    try{
    const blog= await blogModel.findAll({
     include:{
        model: userModel,
        attributes: ['name']
    }});
    return res.json({Message:"Success",blog});
    } catch(err){
    return res.json({Message:"Error",error:err.stack});
    }
    // res.json({message:'Blog'});
}

export const addBlog=async(req,res)=>{
const {title,body,UserId}=req.body;
try{
const blog= await blogModel.create({title,body,UserId});
return res.json({message:"Success",blog});
}catch(err){
    if(err.original?.errno==1062){
return res.json({Message:"Duplacate Entry for body, Enter another value",error:err.stack});

    }else if(err.original?.errno==1452){
     return res.json({Message:" foreign key constraint fails-invalid id",error:err});

    }
else return res.json({Message:"Error",error:err.stack});
}
}


