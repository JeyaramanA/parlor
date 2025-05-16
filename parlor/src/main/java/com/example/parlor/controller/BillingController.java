package com.example.parlor.controller;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import com.example.parlor.entity.Bill;
import com.example.parlor.service.BillingService;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/billings")
@CrossOrigin
public class BillingController {

    private final BillingService billingService;

    public BillingController(BillingService billingService) {
        this.billingService = billingService;
    }

    @PostMapping
    public Bill createBilling(@RequestBody Bill billing) {
        return billingService.saveBilling(billing);
    }

    @GetMapping
    public List<Bill> getAllBillings() {
        return billingService.getAllBillings();
    }

    @GetMapping("/date")
    public List<Bill> getBillingsByDate(
            @RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return billingService.getBillingsByDate(date);
    }

    @GetMapping("/artist/{artistId}")
    public List<Bill> getBillingsByArtist(@PathVariable Long artistId) {
        return billingService.getBillingsByArtist(artistId);
    }
}
