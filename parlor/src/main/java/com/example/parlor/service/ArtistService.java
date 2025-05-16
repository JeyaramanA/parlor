package com.example.parlor.service;

import com.example.parlor.entity.Artist;
import com.example.parlor.repository.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService {

    @Autowired
    private ArtistRepository artistRepository;

    public List<Artist> getAllArtists() {
        return artistRepository.findAll();
    }

    public Artist getArtistById(Long id) {
        return artistRepository.findById(id).orElse(null);
    }

    public Artist createArtist(Artist artist) {
        return artistRepository.save(artist);
    }

    public Artist updateArtist(Long id, Artist artistDetails) {
        Artist artist = artistRepository.findById(id).orElse(null);
        if (artist != null) {
            artist.setName(artistDetails.getName());
            artist.setPhone(artistDetails.getPhone());
            artist.setSpecialization(artistDetails.getSpecialization());
            return artistRepository.save(artist);
        }
        return null;
    }

    public void deleteArtist(Long id) {
        artistRepository.deleteById(id);
    }
}
