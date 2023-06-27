//Creating Schema for student.
const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    FirstName : {type: String, required:true},
    LastName : {type: String,required:true},
    RollNumber:{type:String,required:true},
    MobileNumber : {type: String},
    City : {type: String,required:true},
    
});
var studentModel = mongoose.model('student',DataSchema);
module.exports=studentModel;
