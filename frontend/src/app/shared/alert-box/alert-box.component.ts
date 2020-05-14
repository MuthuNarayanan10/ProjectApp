
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  title:string,
  value: string;
}

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent{

  constructor(
    public dialogRef: MatDialogRef<AlertBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
}

