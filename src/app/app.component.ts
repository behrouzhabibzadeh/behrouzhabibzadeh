import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './Api/auth.service';
import { Base } from './base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppTitle';
  date  = new Date();
  appversion =''

  constructor(
    public authApi:AuthService,
    public dialog: MatDialog,
    public base: Base,)
  {}

  ngOnInit(): void {
    this.appversion = this.base.version;
    this.date = new Date();
    // //checking new version
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.available.subscribe(() => {
    //     if (
    //       confirm(
    //         'نسخه جدیدی از سامانه در دسترس است. لطفا برای بروزآوری تائید کنید'
    //       )
    //     ) {
    //       window.location.reload();
    //     }
    //   });
    // }
  }


}
