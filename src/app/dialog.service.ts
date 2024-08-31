import { Injectable } from '@angular/core';
import { ImgPopupComponent } from './img-popup/img-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(msg: string) {
    return this.dialog.open(ImgPopupComponent, {
      width: '390px',
      disableClose: false,      
      panelClass: 'custom-dialog-container', // Custom class for additional styling
      data: {
        message: msg,
      }
    });
  }
}
