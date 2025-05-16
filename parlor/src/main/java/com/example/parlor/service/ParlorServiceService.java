package com.example.parlor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.parlor.entity.ParlorService;
import com.example.parlor.repository.ParlorServiceRepository;

import java.util.List;

@Service
public class ParlorServiceService {

    @Autowired
    private ParlorServiceRepository repository;

    public List<ParlorService> getAllServices() {
        return repository.findAll();
    }

    public ParlorService getServiceById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public ParlorService createService(ParlorService service) {
        return repository.save(service);
    }

    public ParlorService updateService(Long id, ParlorService serviceDetails) {
        ParlorService service = repository.findById(id).orElse(null);
        if (service != null) {
            service.setServiceName(serviceDetails.getServiceName());
            service.setPrice(serviceDetails.getPrice());
            service.setDurationInMinutes(serviceDetails.getDurationInMinutes());
            return repository.save(service);
        }
        return null;
    }

    public void deleteService(Long id) {
        repository.deleteById(id);
    }
}
