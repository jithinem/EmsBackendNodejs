//importing db
const db=require('./db');

//get all employees
const allEmployees=()=>{
    return db.Employee.find().then(
        result=>{
            if(result){
                return{
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Employees not found"
                }
            }
        }
    )
}

//add employees
const addEmployee=(id,empname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(
        result=>{
            if(result){
                return{
                    statusCode:401,
                    message:"Employee already exist"
                }
            }
            else{
                const newEmployee=new db.Employee({
                    id,
                    empname,
                    age,
                    designation,
                    salary
                })
                newEmployee.save();
                return{
                    statusCode:200,
                    message:"EMployee added successfully"
                }
            }
        }
    )
}

//delete employee
const delEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then(
        result=>{
            if(result){
                return{
                    statusCode:200,
                    message:"Deleted successfully"
                }               
            }
            else{
                return{
                    statusCode:401,
                    message:"No data"
                }
            }
        }
    )
}

//get a particular employee details
const getEmployee=(id)=>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    employee:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"No data"
                }
            }
        }
    )
}

//updating employee details
const updateEmployee=(id,empname,age,designation,salary)=>{
    return db.Employee.findOne({id}).then(
        (result)=>{
            if(result){
                result.id=id;
                result.empname=empname,
                result.age=age,
                result.designation=designation,
                result.salary=salary
                result.save();
                return{
                    statusCode:200,
                    message:"Data saved successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Employee not found"
    
                }
            }
        }
    )
}


module.exports={
    allEmployees,
    addEmployee,
    delEmployee,
    getEmployee,
    updateEmployee
}