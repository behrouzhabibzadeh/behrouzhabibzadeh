import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit {
  public msg = 'پیام';
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
   this.msg = data;
 }

 ngOnInit(): void {}

}
