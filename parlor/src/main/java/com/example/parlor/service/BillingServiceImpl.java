package com.example.parlor.service;

import org.springframework.stereotype.Service;

import com.example.parlor.entity.Bill;
import com.example.parlor.repository.BillingRepository;

import java.time.LocalDate;
import java.util.List;

@Service
public class BillingServiceImpl implements BillingService {

    private final BillingRepository billingRepository;

    public BillingServiceImpl(BillingRepository billingRepository) {
        this.billingRepository = billingRepository;
    }

    @Override
    public Bill saveBilling(Bill billing) {
        return billingRepository.save(billing);
    }

    @Override
    public List<Bill> getAllBillings() {
        return billingRepository.findAll();
    }

    @Override
    public List<Bill> getBillingsByDate(LocalDate date) {
        return billingRepository.findByBillingDate(date);
    }

    @Override
    public List<Bill> getBillingsByArtist(Long artistId) {
        return billingRepository.findByArtistId(artistId);
    }
}
