import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Api/api.service';
import { Base, msgType } from 'src/app/base';
import { AppUser } from 'src/app/Models/AppUser';
import { AppUserDialogComponent } from '../app-user-dialog/app-user-dialog.component';

@Component({
  selector: 'app-app-user-password-dialog',
  templateUrl: './app-user-password-dialog.component.html',
  styleUrls: ['./app-user-password-dialog.component.css']
})
export class AppUserPasswordDialogComponent implements OnInit {
  title = 'کاربر';

  isLoadingResults = true;
  model: any = {};

  constructor(
    private api: ApiService,
    private base: Base,
    public dialogRef: MatDialogRef<AppUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {

    console.log(data);
    this.model.AppUserId = data;

  }

  ngOnInit(): void {
    this.isLoadingResults = false;
  }


  onSubmit() {

    if (this.model.Password === this.model.RePassword) { } else {
      this.base.openSnackBar('رمز و تکرارش برابر نیستند', msgType.error)
      return
    }

    this.isLoadingResults = true;
    this.api.putAppUserPassword(this.model)
      .subscribe(
        () => {
          this.isLoadingResults = false;
          this.dialogRef.close();
        },
        (error) => {
          this.base.openSnackBar(error.error, msgType.error);
          this.isLoadingResults = false;
        });
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

}
