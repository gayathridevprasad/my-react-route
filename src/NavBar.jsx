import React from 'react'
import {Link,Outlet} from 'react-router-dom';
export const NavBar = () => {
  return (
    <div>
        <ul className="flex gap-5">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/contacts">Contact us</Link>
            </li>
            <li>
                <Link to="/employees">Employees</Link>
            </li>
        </ul>
     
    <Outlet/>
    </div>
  )
}
