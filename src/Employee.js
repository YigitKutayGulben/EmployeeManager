import React, { useState } from "react";
import "./App.css";

const Employee = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@company.com",
      phone: "555-0101",
      depertment: "IT",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@company.com",
      phone: "555-0102",
      depertment: "HR",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@company.com",
      phone: "555-0103",
      depertment: "Finance",
    },
  ]);

  const [editingEmployee, setEditingEmployee] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleEditClick = (employee) => {
    setEditingEmployee({ ...employee });
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === editingEmployee.id ? editingEmployee : emp
      )
    );
    setModalOpen(false);
    setEditingEmployee(null);
  };

  const handleClose = () => {
    setModalOpen(false);
    setEditingEmployee(null);
  };

  return (
    <div>
      <h1>Employee Manager</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.depertment}</td>
              <td>
                <button onClick={() => deleteEmployee(employee.id)}>
                  Delete
                </button>
                <button onClick={() => handleEditClick(employee)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && editingEmployee && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Employee</h2>
            <div className="modal-form">
              <div>
                <label>Name: </label>
                <input name="name" value={editingEmployee.name} onChange={handleInputChange} />
              </div>
              <div>
                <label>Email: </label>
                <input name="email" value={editingEmployee.email} onChange={handleInputChange} />
              </div>
              <div>
                <label>Phone: </label>
                <input name="phone" value={editingEmployee.phone} onChange={handleInputChange} />
              </div>
              <div>
                <label>Department: </label>
                <input name="depertment" value={editingEmployee.depertment} onChange={handleInputChange} />
              </div>
              <div className="modal-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleClose}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee; 