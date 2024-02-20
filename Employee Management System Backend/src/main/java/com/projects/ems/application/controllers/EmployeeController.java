package com.projects.ems.application.controllers;

import com.projects.ems.application.dto.EmployeeDto;
import com.projects.ems.application.service.interfaces.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/employees")
public class EmployeeController {

    private EmployeeService service;

    @PostMapping("/create")
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto dto){
        EmployeeDto employee = service.createEmployee(dto);
        return new ResponseEntity<>(employee, HttpStatus.CREATED);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long id){
        EmployeeDto employee = service.getEmployeeById(id);
        return ResponseEntity.ok(employee);
    }

    @GetMapping("/all")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> allEmployees = service.getAllEmployees();
        return ResponseEntity.ok(allEmployees);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long id, @RequestBody EmployeeDto dto){
        EmployeeDto employeeDto = service.updateEmployee(id, dto);
        return ResponseEntity.ok(employeeDto);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
        service.deleteEmployee(id);
        return ResponseEntity.ok("Element deleted successfully");
    }

    @DeleteMapping("delete/all")
    public ResponseEntity<String> deleteAll(){
        service.deleteAll();
        return ResponseEntity.ok("Database cleared successfully...");
    }
}
