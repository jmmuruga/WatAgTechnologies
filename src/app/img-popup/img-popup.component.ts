import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-img-popup',
  templateUrl: './img-popup.component.html',
  styleUrls: ['./img-popup.component.css'],
})
export class ImgPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ImgPopupComponent>
  ) {}
  ngOnInit(): void {}
  closedialog() {
    this.dialogRef.close(false);
  }
}
