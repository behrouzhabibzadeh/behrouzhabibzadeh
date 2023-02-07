import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGurdService } from './Api/auth-gurd.service';
import { AppUserGroupComponent } from './AppUser/app-user-group/app-user-group.component';
import { AppUserStationComponent } from './AppUser/app-user-station/app-user-station.component';
import { AppUserComponent } from './AppUser/app-user/app-user.component';
import { CityComponent } from './Person/city/city.component';
import { OrganizationComponent } from './Person/organization/organization.component';
import { PersonGroupComponent } from './Person/person-group/person-group.component';
import { PersonComponent } from './Person/person/person.component';
import { ProvinceComponent } from './Person/province/province.component';

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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
