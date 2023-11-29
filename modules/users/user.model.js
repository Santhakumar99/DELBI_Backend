const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{type:String, maxLength: 30},
    age:{type:String,maxLength:3},       
    address:{type:String,maxLength:200},
    work:{type:String,maxLength:30},
    mobile:{type:Number,maxLength:10}
})
module.exports = mongoose.model("Users",UserSchema);