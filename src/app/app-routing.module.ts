import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGurdService } from './Api/auth-gurd.service';
import { AppUserGroupComponent } from './AppUser/app-user-group/app-user-group.component';
import { AppUserStationComponent } from './AppUser/app-user-station/app-user-station.component';
import { AppUserComponent } from './AppUser/app-user/app-user.component';
import { LoginComponent } from './AppUser/login/login.component';
import { AppLogComponent } from './Pages/app-log/app-log.component';
import { AppSettingComponent } from './Pages/app-setting/app-setting.component';
import { IndexComponent } from './Pages/index/index.component';
import { CityComponent } from './Person/city/city.component';
import { OrganizationComponent } from './Person/organization/organization.component';
import { PersonGroupComponent } from './Person/person-group/person-group.component';
import { PersonComponent } from './Person/person/person.component';
import { ProvinceComponent } from './Person/province/province.component';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'AppError', component: AppUserComponent, canActivate: [AuthGurdService], data: { role: ['superadmin','admin','poweroperator','operator' ,'reporter' , 'guest'] } },




  { path: 'AppUserRole', component: AppUserGroupComponent, canActivate: [AuthGurdService], data: { role: ['superadmin','admin','poweroperator','operator' ,'reporter' , 'guest'] } },
  { path: 'AppUser', component: AppUserComponent, canActivate: [AuthGurdService], data: { role: ['superadmin','admin','poweroperator','operator' ,'reporter' , 'guest'] } },
  { path: 'AppUserStation', component: AppUserStationComponent, canActivate: [AuthGurdService], data: { role: ['superadmin','admin','poweroperator','operator' ,'reporter' , 'guest'] } },




  { path: 'Person', component: PersonComponent, canActivate: [AuthGurdService], data: { role: ['superadmin','admin','poweroperator','operator' ,'reporter' , 'guest'] } },
  { path: 'PersonGroup', component: PersonGroupComponent, canActivate: [AuthGurdService], data: { role: ['superadmin','admin','poweroperator','operator' ,'reporter' , 'guest'] } },
  { path: 'Organization', component: OrganizationComponent, canActivate: [AuthGurdService], data: { role: ['superadmin','admin','poweroperator','operator' ,'reporter' , 'guest'] } },
  { path: 'City', component: CityComponent, canActivate: [AuthGurdService], data: { role: ['superadmin','admin','poweroperator','operator' ,'reporter' , 'guest'] } },
  { path: 'Province', component: ProvinceComponent, canActivate: [AuthGurdService], data: { role: ['superadmin','admin','poweroperator','operator' ,'reporter' , 'guest'] } },




  { path: 'AppLog', component: AppLogComponent, canActivate: [AuthGurdService], data: { role: ['superadmin', 'admin'] } },
  { path: 'AppSetting', component: AppSettingComponent, canActivate: [AuthGurdService], data: { role: ['superadmin', 'admin'] } },
  { path: 'Login', component: LoginComponent },
  { path: 'Index', component: IndexComponent, canActivate: [AuthGurdService], data: { role: 'All' } },
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
