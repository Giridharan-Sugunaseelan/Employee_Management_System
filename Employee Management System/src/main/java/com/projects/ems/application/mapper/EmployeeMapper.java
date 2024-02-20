package com.projects.ems.application.mapper;

import com.projects.ems.application.dto.EmployeeDto;
import com.projects.ems.application.model.Employee;

public class EmployeeMapper {

    public static Employee mapToEntity(EmployeeDto dto){
        return (new Employee(
                dto.getId(),
                dto.getFirstName(),
                dto.getLastName(),
                dto.getEmail()
        ));
    }

    public static EmployeeDto mapToDto(Employee employee){
        return (new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        ));
    }
}
