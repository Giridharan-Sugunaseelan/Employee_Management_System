package com.projects.ems.application.service.impl;

import com.projects.ems.application.dto.EmployeeDto;
import com.projects.ems.application.exceptions.ResourceNotFoundException;
import com.projects.ems.application.mapper.EmployeeMapper;
import com.projects.ems.application.model.Employee;
import com.projects.ems.application.repository.EmployeeRepository;
import com.projects.ems.application.service.interfaces.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository repository;


    @Override
    public EmployeeDto createEmployee(EmployeeDto empDto) {
        Employee employee = EmployeeMapper.mapToEntity(empDto);
        Employee saved = repository.save(employee);
        return EmployeeMapper.mapToDto(saved);
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee Not found!!!"));
        return EmployeeMapper.mapToDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = repository.findAll();
        List<EmployeeDto> list = new ArrayList<>();
        for(Employee employee : employees){
            list.add(EmployeeMapper.mapToDto(employee));
        }
        return list;
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto employee) {
        Employee employee1 = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id" + id));
        employee1.setFirstName(employee.getFirstName());
        employee1.setLastName(employee.getLastName());
        employee1.setEmail(employee.getEmail());
        Employee saved = repository.save(employee1);
        return EmployeeMapper.mapToDto(saved);
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee employee = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id" + id));
        repository.delete(employee);
    }

    @Override
    public void deleteAll() {
        repository.deleteAll();
    }


}
