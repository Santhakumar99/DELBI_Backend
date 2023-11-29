const mongoose =require('mongoose');
const config =require("config");
const User = require('./user.model');

exports.getAllUsers = async(req,res)=>{
try{
const getusers = await User.find({});
res.json(getusers);

}
catch(err){
console.log("error" + err);
}

}
exports.FindUser = async(req,res)=>{
    try{
    const getusers = await User.findOne({_id:req.params.id});
    res.json(getusers);
    }
    catch(err){
    console.log("error" + err);
    }
    
    }
exports.CreateAllUsers = async(req,res)=>{
    try{
         const {name,age,address,mobile,work}= req.body;
      let user = new User({
            name,age,address,mobile,work
        });
    const CreateUsers = await user.save();
    res.json(CreateUsers);
    
    }
    catch(err){
    console.log("error" + err);
    }
    
    }

    exports.UpdateUser = async(req,res)=>{
        try{
             const {name,age,address,mobile,work}= req.body;

        let users = await User.findById(req.params.id);
        if(users)
        Object.assign(users,{
            name,age,address,mobile,work
    
        });
        await users.save();
        res.json(users).status("updated successfully...");

        }
        catch(err){
        console.log("error" + err);
        }
        
        }
        exports.DeleteUser = async(req,res)=>{
            try{
    
            let users = await User.deleteOne({_id:req.params.id});
            res.json({result :"User Deleted successfully...", resultcode : 0 });
    
            }
            catch(err){
            console.log("error" + err);
            }
            
            }