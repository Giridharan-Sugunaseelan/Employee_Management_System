import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Service/service';
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeComponent() {
  
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");

  const navigator = useNavigate();
  const{id} = useParams();
 
  const saveOrUpdateEmployee = (e) =>{
    e.preventDefault();
    const employee = {firstName, lastName,email}
    
    if(id){
      updateEmployee(id,employee).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
    }
    else{
      createEmployee(employee).then((response) => {
        console.log(response.data);
      })
    }
    navigator("/employees/all");
  }

  useEffect(() => {
    if(id){
      getEmployee(id).then((response) => {
        setFirstName((f) => f = response.data.firstName);
        setLastName((l) => l = response.data.lastName); 
        setEmail((e) => e = response.data.email);
      })
    }
  },[id])
  
  const pageTitle = ()=>{
      if(id){
        return <h2>Update Employee</h2>
      }
      else{
        <h2>Add Employee</h2>
      }
  }

  

  return (
    <div className='container'>
      <br/><br/>
      <div className="row col-6 offset-3">
        <div className="card">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input type='text' className='form-control' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input type='text' className='form-control' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input type='text' className='form-control' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <button className='btn btn-primary' onClick={saveOrUpdateEmployee}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent