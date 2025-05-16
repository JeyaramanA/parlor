package com.example.parlor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.parlor.entity.Bill;

import java.time.LocalDate;
import java.util.List;

public interface BillingRepository extends JpaRepository<Bill, Long> {
    List<Bill> findByBillingDate(LocalDate date);

    List<Bill> findByArtistId(Long artistId);
}
