package com.example.parlor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.parlor.entity.Artist;

public interface ArtistRepository extends JpaRepository<Artist, Long> {
}
