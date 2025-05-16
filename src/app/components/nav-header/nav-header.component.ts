import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class NavHeaderComponent {
  user = {
    name: 'Ram AJ',
    role: 'Admin',
  };

  showDropdown = false;

  private eRef = inject(ElementRef);
  private router = inject(Router);

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase();
  }

  logOut() {
    this.router.navigate(['/login']);
  }
}
