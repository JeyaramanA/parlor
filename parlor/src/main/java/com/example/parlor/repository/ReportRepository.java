package com.example.parlor.repository;

import com.example.parlor.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Bill, Long> {

    @Query("SELECT b FROM Bill b WHERE b.billingDate >= :startDate AND b.billingDate <= :endDate")
    List<Bill> findBillingsBetweenDates(@Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate);
}
