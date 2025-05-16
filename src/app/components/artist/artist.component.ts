// src/app/components/artist/artist.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Artist } from '../../utils/interface';
import { ArtistService } from '../../providers/artist.service';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  artistForm!: FormGroup;
  artists: Artist[] = [];
  editingArtist: Artist | null = null;

  constructor(private fb: FormBuilder, private artistService: ArtistService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadArtists();
  }

  initForm(): void {
    this.artistForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      specialization: ['', Validators.required],
    });
  }

  loadArtists(): void {
    this.artistService.getAll().subscribe((data) => (this.artists = data));
  }

  submit(): void {
    console.log(this.artistForm);
    if (this.artistForm.invalid) return;

    const formValue = this.artistForm.value;
    if (this.editingArtist) {
      const updated: Artist = { ...this.editingArtist, ...formValue };
      this.artistService.update(updated).subscribe(() => {
        this.loadArtists();
        this.cancelEdit();
      });
    } else {
      this.artistService.create(formValue).subscribe(() => {
        this.loadArtists();
        this.artistForm.reset();
      });
    }
  }

  edit(artist: Artist): void {
    this.editingArtist = artist;
    this.artistForm.patchValue(artist);
  }

  delete(artist: Artist): void {
    if (confirm(`Are you sure you want to delete ${artist.name}?`)) {
      this.artistService.delete(artist.id!).subscribe(() => {
        this.loadArtists();
        if (this.editingArtist?.id === artist.id) this.cancelEdit();
      });
    }
  }

  cancelEdit(): void {
    this.editingArtist = null;
    this.artistForm.reset();
  }
}
