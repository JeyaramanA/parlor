import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = new Subject<boolean>();
  loaderText = new Subject<string>();

  show(loaderText?: string) {
    this.loaderText.next(loaderText || '');
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
}
