package com.projects.ems.application.service.interfaces;

import com.projects.ems.application.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    public EmployeeDto createEmployee(EmployeeDto empDto);

    public EmployeeDto getEmployeeById(Long id);

    public List<EmployeeDto> getAllEmployees();

    public EmployeeDto updateEmployee(Long id, EmployeeDto employee);

    public void deleteEmployee(Long id);

    public void deleteAll();
}
