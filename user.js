//creating Schema for user.
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    username : {type: String, required:true, index : { unique: true}},
    email : {type: String, required:true, index : { unique: true}},
    password : {type: String, required:true},
});

var userModel = mongoose.model('users',userSchema);
module.exports=userModel;
