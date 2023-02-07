import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Api/auth.service';
import { Base, msgType } from 'src/app/base';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  isLoadingResults = false;
  appversion='';

  constructor(
    public api: AuthService,
    private base: Base,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appversion = this.base.version;

    if (this.api.isAuth) {
      this.router.navigate(['/Index']);
    }
  }

  login(c:any) {
    this.isLoadingResults = true;
    this.api.Login(c).subscribe(
      (res) => {
        this.api.setLocalStorage(res);
        this.base.openSnackBar('خوش آمدید', msgType.success);
        this.isLoadingResults = false;
      },
      (err) => {
        this.base.openSnackBar(err.error, msgType.error);
        this.isLoadingResults = false;
      }
    );
  }

  onNoClick() { }
}
