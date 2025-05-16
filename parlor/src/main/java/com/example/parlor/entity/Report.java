package com.example.parlor.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Report {
    private String artistName;
    private double totalRevenue;
    private long totalCustomers;

    public Report(Bill bill) {
        // map Bill fields to Report fields here
    }
}
