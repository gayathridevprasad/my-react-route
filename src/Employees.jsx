import React from 'react'
import {getEmployees} from './data';
import { NavBar } from './NavBar';
import {Link} from 'react-router-dom';
export const Employees = () => {
  let employees=getEmployees();
  return (
    <div>
        <div><NavBar/></div>
                Employees
    
    <div className="flex-wrap">
        {
            employees.map((e)=>(
               <Link to={`/employees/${e.eno}`}>{e.name}</Link> 
            ))
        }
    </div>
    </div>
  )
}
