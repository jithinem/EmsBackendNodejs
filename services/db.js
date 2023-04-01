//importing mongoose
const mongoose=require('mongoose');

//connect to mongodb using connection string
mongoose.connect('mongodb://localhost:27017/ems_db');

//creating model
const Employee=mongoose.model('employee',{
    //schema creation
    id:String,
    empname:String,
    age:String,
    designation:String,
    salary:String
})

module.exports={
    Employee
}

