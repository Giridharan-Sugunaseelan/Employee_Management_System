import { useEffect, useState } from "react";
import { deleteEmploye, employeesList } from "../Service/service";
import { useNavigate } from "react-router-dom";
export { ListEmployeeComponent };
function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    employeesList()
      .then((response) => setEmployees(response.data))
      .catch((error) => {
        console.log(error.msg);
      });
  }, [employees]);

  const addEmployee = () => {
    return navigate("/employees/add-employee");
  };

  const updateEmployee = (id) => {
    console.log(id);
    return navigate(`/employees/update-employee/${id}`);
  };

  const deleteEmployee = (id) => {
    deleteEmploye(id);
  };
  return (
    <>
      <div className="container table-responsive">
        <h2 className="text-center">List of Employees</h2>
        <button className="btn btn-primary mb-2" onClick={addEmployee}>
          Add Employee
        </button>
        <table className="table table-striped table-bordered">
          <thead>
            <tr className="table-dark">
              <th style={{ textAlign: "center" }}>Id</th>
              <th style={{ textAlign: "center" }}>First Name</th>
              <th style={{ textAlign: "center" }}>Last Name</th>
              <th style={{ textAlign: "center" }}>Email Name</th>
              <th colSpan="2" style={{ textAlign: "center" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td style={{ textAlign: "center" }}>{employee.id}</td>
                <td style={{ textAlign: "center" }}>{employee.firstName}</td>
                <td style={{ textAlign: "center" }}>{employee.lastName}</td>
                <td style={{ textAlign: "center" }}>{employee.email}</td>
                <td style={{ textAlign: "center" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
