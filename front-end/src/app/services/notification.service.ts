import { Injectable } from '@angular/core';

import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastService: HotToastService) {}
  showMessage(msg: string) {
    this.toastService.success(msg);
  }
}
