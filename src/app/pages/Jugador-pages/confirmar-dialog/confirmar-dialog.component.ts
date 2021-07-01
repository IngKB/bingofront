import { Inject } from '@angular/core';
import { Component, OnInit,inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-confirmar-dialog',
  templateUrl: './confirmar-dialog.component.html',
  styleUrls: ['./confirmar-dialog.component.css']
})
export class ConfirmarDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ConfirmarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string ) { }

  ngOnInit() {
  }
  onClickNo():void{
    this.dialogRef.close();
  }
}
