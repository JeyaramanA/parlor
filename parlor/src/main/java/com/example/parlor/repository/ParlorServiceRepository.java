package com.example.parlor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.parlor.entity.ParlorService;

public interface ParlorServiceRepository extends JpaRepository<ParlorService, Long> {
}
