package com.example.parlor.service;

import com.example.parlor.entity.Bill;
import com.example.parlor.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReportService {

    @Autowired
    private ReportRepository reportRepository;

    public List<Bill> getBillsBetweenDates(LocalDate startDate, LocalDate endDate) {
        return reportRepository.findBillingsBetweenDates(startDate, endDate);
    }
}
