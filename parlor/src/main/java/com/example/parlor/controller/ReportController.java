package com.example.parlor.controller;

import com.example.parlor.entity.Bill;
import com.example.parlor.entity.Report;
import com.example.parlor.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin
public class ReportController {

    @Autowired
    private ReportService reportService;

    @GetMapping("/billing-summary")
    public List<Report> getBillingSummary(
            @RequestParam(value = "startDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,

            @RequestParam(value = "endDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        if (startDate == null) {
            startDate = LocalDate.now().minusDays(30); // default to last 30 days
        }
        if (endDate == null) {
            endDate = LocalDate.now();
        }

        List<Bill> bills = reportService.getBillsBetweenDates(startDate, endDate);

        return bills.stream()
                .map(Report::new) // Assuming Report has a constructor accepting a Bill
                .collect(Collectors.toList());
    }
}
