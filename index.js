//importing express
const express=require('express');

//create server
const server=express();

//importing cors
const cors=require('cors');

//importing logic
const logic=require('./services/logic');

//connection
server.use(cors({
    origins:'http://localhost:3000'
}));

//to tell server that data coming from frontend is json
server.use(express.json());

//listening
server.listen(8000,()=>{
    console.log('listening to port 8000');
});

//api call to get all employee details
server.get('/allemployees',(req,res)=>{
    logic.allEmployees().then(
        result=>{
            res.status(result.statusCode).json(result);
        }
    )
})

//api call to add employee details
server.post('/addemployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then(
        result=>{
            res.status(result.statusCode).json(result);
        }
    )
})

//api call to delete employee
server.delete('/deleteemployee/:id',(req,res)=>{
    logic.delEmployee(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result);
        }
    )
})