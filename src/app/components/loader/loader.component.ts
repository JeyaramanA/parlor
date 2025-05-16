import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../providers/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [ProgressSpinnerModule, CommonModule],
})
export class LoaderComponent implements OnInit {
  private loadingServivce = inject(LoadingService);

  isLoading: Subject<boolean> = this.loadingServivce.isLoading;
  loaderText = '';

  ngOnInit(): void {
    this.loadingServivce.loaderText.subscribe((res: any) => {
      this.loaderText = res;
    });
  }
}
