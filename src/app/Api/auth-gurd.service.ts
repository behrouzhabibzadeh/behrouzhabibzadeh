import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdService {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // console.log(next);
    // console.log(next.data.role);
    // console.log(state);

    //    if (next.data.role == 'Admin') {
    //  console.log(next.data.role);

    if (next.data['role'] == 'All') {
      return true;
    }

    let roleArray: Array<string> = next.data['role'];
    // console.log(roleArray);

    if (roleArray.includes(this.auth.getRole().role)) {
      // console.log('in');

      // if (this.auth.isAdmin()) {
      //   //  console.log('is admin TOO');
      //   return true;
      // } else {
      //   //  console.log('local role not admin');
      //   return false;
      // }
      return true;
    } else {
      // console.log('no admin');
      return false;
    }

    // if (!this.auth.isAuth) {
    //   this.router.navigate(['Login']);
    //   return false;
    // }

    return this.auth.isAuth;
  }
}
