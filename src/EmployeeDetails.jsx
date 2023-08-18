import React from 'react';
import { useParams } from 'react-router-dom';
import { getEmployees } from './data';

export const EmployeeDetails = () => {
  const { id } = useParams(); // 101

  let employees = getEmployees(); // fetch entire data

  const filteredEmployees = employees.filter(emp => emp.eno == id);

  if (filteredEmployees.length === 0) {
    return (
      <div>
        <h2>Employee Details</h2>
        <div>
          <h1>Record not found</h1>
        </div>
      </div>
    );
  }

  const emp = filteredEmployees[0]; // There should be only one match, so we take the first element

  return (
    <div>
      <h2>Employee Details</h2>
      <p>
        EmployeeName : {emp.name}
        <br />
        EmployeeNo : {emp.eno}
      </p>
    </div>
  );
};
