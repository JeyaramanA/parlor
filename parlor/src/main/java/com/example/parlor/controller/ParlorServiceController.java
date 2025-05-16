package com.example.parlor.controller;

import com.example.parlor.entity.ParlorService;
import com.example.parlor.service.ParlorServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/parlor-services")
@CrossOrigin
public class ParlorServiceController {

    @Autowired
    private ParlorServiceService parlorService;

    @GetMapping
    public List<ParlorService> getAllServices() {
        return parlorService.getAllServices();
    }

    @GetMapping("/{id}")
    public ParlorService getServiceById(@PathVariable Long id) {
        return parlorService.getServiceById(id);
    }

    @PostMapping
    public ParlorService createService(@RequestBody ParlorService serviceData) {
        return parlorService.createService(serviceData);
    }

    @PutMapping("/{id}")
    public ParlorService updateService(@PathVariable Long id, @RequestBody ParlorService serviceData) {
        return parlorService.updateService(id, serviceData);
    }

    @DeleteMapping("/{id}")
    public void deleteService(@PathVariable Long id) {
        parlorService.deleteService(id);
    }
}
