import axios from "axios";

const REST_BASE_URL = "http://localhost:8080/employees"

export const employeesList = () =>{
    return axios.get(REST_BASE_URL + "/all");
}

export const createEmployee = (employee) => {
    return axios.post(REST_BASE_URL + "/create", employee);
}

export const getEmployee = (id) => {
    return axios.get(REST_BASE_URL + "/find/" + id);
}

export const updateEmployee = (id,employee) => {
    return axios.put(REST_BASE_URL + "/update/" + id, employee);
}

export const deleteEmploye = (id) => {
    return axios.delete(REST_BASE_URL + "/delete/" + id);
}