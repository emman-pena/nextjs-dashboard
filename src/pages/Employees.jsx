import React from "react";

const Employees = () => {
  // Sample employee data
  const employees = [
    { id: 1, name: "John Doe", role: "Software Engineer", department: "Engineering" },
    { id: 2, name: "Jane Smith", role: "Product Manager", department: "Product" },
    { id: 3, name: "Mark Johnson", role: "HR Specialist", department: "Human Resources" },
  ];

  return (
    <div className="employees-page">
      <h1>Employees</h1>
      <table className="employees-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
