package com.example.parlor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.parlor.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
