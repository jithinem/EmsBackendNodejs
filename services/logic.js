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
    return db.employees.deleteOne({id}).then(
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


module.exports={
    allEmployees,
    addEmployee,
    delEmployee
}