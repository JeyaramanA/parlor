package com.example.parlor.service;

import java.time.LocalDate;
import java.util.List;

import com.example.parlor.entity.Bill;

public interface BillingService {
    Bill saveBilling(Bill billing);

    List<Bill> getAllBillings();

    List<Bill> getBillingsByDate(LocalDate date);

    List<Bill> getBillingsByArtist(Long artistId);
}
