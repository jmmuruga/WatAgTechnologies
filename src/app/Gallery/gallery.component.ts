import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-iot',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class IotComponent implements OnInit {
  // isShowBlockDiagram: boolean = false;
  // isShowDashboard: boolean = false;
  // isShowSignal: boolean = false;
  constructor(private dialogService: DialogService) {}
  ngOnInit(): void {
    // this.openTab(1);
  }
  // openTab(id: Number) {
  //   if (id == 1) {
  //     this.isShowBlockDiagram = true;
  //     this.isShowDashboard = false;
  //     this.isShowSignal = false;
  //   } else if (id == 2) {
  //     this.isShowBlockDiagram = false;
  //     this.isShowDashboard = false;
  //     this.isShowSignal = true;
  //   } else if (id == 3) {
  //     this.isShowBlockDiagram = false;
  //     this.isShowDashboard = true;
  //     this.isShowSignal = false;
  //   }
  // }

  openDialog() {
    this.dialogService.openConfirmDialog('Are you sure you want to proceed?').afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
    });
  }
}
