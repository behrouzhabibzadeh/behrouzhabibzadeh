import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private conf: ConfigService
  ) { }

  get isAuth() {
    return !!localStorage.getItem('token');
  }

  get getFullName() {
    if (!localStorage.getItem('token')) this.Logout();
    let decoded: any = jwt_decode(localStorage.getItem('token')||'undefined');
    return decoded.fullname;
  }

  get getUserGUID() {
    if (!localStorage.getItem('token')) this.Logout();
    let decoded: any = jwt_decode(localStorage.getItem('token')||'undefined');
    return decoded.sub;
  }

  Login(credentials:any) {
    return this.http.post<any>(this.conf.getServerURL() + `/account/Login`, {
      username: credentials.username,
      password: credentials.password,
    });
  }

  setLocalStorage(res: any) {
    //     console.log(res);
    localStorage.setItem('token', res.token);
    this.getUser();
  }

  getUser() {
    // console.log(this.getRole().role);

    if (this.getRole().role === 'TicketOperator') {
      this.router.navigateByUrl('PassengerLists');
    } else {
      this.router.navigateByUrl('Index');
    }
  }

  public getMe() {
    return this.http.get<any>(this.conf.getServerURL() + `/account`);
  }

  // public getFullName() {
  //   if (localStorage.getItem('name'))
  //     return decodeURIComponent(escape(atob(localStorage.getItem('name'))));

  //   return '!';
  // }

  private getRoleID(): number {
    if (!localStorage.getItem('token')) this.Logout();

    try {
      let decoded: any = jwt_decode(localStorage.getItem('token')||'undefined');
      //  console.log(decoded);
      let v: any = decoded.role;
      let chk = Number(v);
      if (chk === 0) {
        this.Logout();
      }
      return chk;
    } catch (error) {
      this.Logout();
    }
    return 0
  }

  public getCanSelectMultiPersonType(): string {
    if (!localStorage.getItem('token')) this.Logout();
    try {
      let decoded: any = jwt_decode(localStorage.getItem('token')||'undefined');
      return decoded.mpt.toLowerCase();
    } catch (error) {
      this.Logout();
    }
    return 'Ok'
  }

  public isAdmin(): boolean {
    let v = this.getRoleID();
    if (v == 1 || v == 2) return true;
    return false;
  }

  //AppUserRoleID	RoleName
  // 0	default
  // 1	SysAdmin
  // 2	Admin
  // 3	PowerOperator
  // 4	TicketOperator
  // 5	CheckOperator
  // 6	Reporter
  // 7	Accounting
  // 8	ServiceOperator
  public getRole(): any {
    let v = this.getRoleID();
   // console.log(v);

    switch (v) {
      case 0:
        return { id: v, role: 'def' };
      case 1:
        return { id: v, role: 'system' };
      case 2:
        return { id: v, role: 'superadmin' };
      case 3:
        return { id: v, role: 'admin' };
      case 4:
        return { id: v, role: 'poweroperator' };
      case 5:
        return { id: v, role: 'operator' };
      case 6:
        return { id: v, role: 'reporter' };
      case 7:
        return { id: v, role: 'guest' };
      case 8:
        return { id: v, role: 'other' };
      default:
        return { id: -1, role: 'null' };
    }
  }

  public menuAccess(roles: Array<string>): boolean {
    return roles.includes(this.getRole().role);
  }

  // public getMyProp(prop) {
  //   return this.http.get<any>(
  //     this.conf.getServerURL() +
  //       `/account/${localStorage.getItem('user')}/${prop}`
  //   );
  // }

  Logout() {
    //  console.log('in LOG OUT!');
    localStorage.clear();
    this.router.navigate(['Login']);
  }

  encryptData(data:any) {
    return btoa(data);
  }
}
