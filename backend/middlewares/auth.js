import jwt from "jsonwebtoken";

import { JWTPASSWORD } from "../routes/config.js";
export const authMiddleware=(req,res,next)=>{
    const auth=req.headers.authorization;
    
    if(!auth || !auth.startsWith("Bearer ")){
        res.status(403).json({
        "msg":"Invalid token"
        })
        
    }
    try{
    const token=auth.split(" ")[1];
    const decode=jwt.verify(token,JWTPASSWORD);
    if(decode.userid){
    req.userid=decode.userid
    next();
    

    
    }else{
        return res.status(403).json({
            "msg":"token error"
        })
    
    }
    }
    catch(err){
        res.status(403).json({
            err:err
        })
    }


};