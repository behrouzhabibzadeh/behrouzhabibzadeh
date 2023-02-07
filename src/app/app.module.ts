import { NgModule, isDevMode, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from './Shared/material-persian-date-adapter';

import { ConfigService } from './Api/config.service';
import { InterceptorService } from './Api/interceptor.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CalendarComponent } from './Shared/calendar/calendar.component';
import { ConfirmDialogComponent } from './Shared/confirm-dialog/confirm-dialog.component';
import { MessageBoxComponent } from './Shared/message-box/message-box.component';
import { SnackComponent } from './Shared/snack/snack.component';
import { JalaliPipe } from './Shared/jalali.pipe';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';
import { LoginComponent } from './AppUser/login/login.component';
import { IndexComponent } from './Pages/index/index.component';
import { AppSettingComponent } from './Pages/app-setting/app-setting.component';
import { AppLogComponent } from './Pages/app-log/app-log.component';
import { AppUserGroupComponent } from './AppUser/app-user-group/app-user-group.component';
import { AppUserGroupDialogComponent } from './AppUser/app-user-group-dialog/app-user-group-dialog.component';
import { AppUserGroupSelectorComponent } from './AppUser/app-user-group-selector/app-user-group-selector.component';
import { AppUserRoleSelectorComponent } from './AppUser/app-user-role-selector/app-user-role-selector.component';
import { GenderSelectorComponent } from './AppUser/gender-selector/gender-selector.component';
import { PersonComponent } from './Person/person/person.component';
import { PersonDialogComponent } from './Person/person-dialog/person-dialog.component';
import { PersonSelectorComponent } from './Person/person-selector/person-selector.component';
import { PersonGroupComponent } from './Person/person-group/person-group.component';
import { PersonGroupDialogComponent } from './Person/person-group-dialog/person-group-dialog.component';
import { PersonGroupSelectorComponent } from './Person/person-group-selector/person-group-selector.component';
import { OrganizationComponent } from './Person/organization/organization.component';
import { OrganizationDialogComponent } from './Person/organization-dialog/organization-dialog.component';
import { OrganizationSelectorComponent } from './Person/organization-selector/organization-selector.component';
import { AppUserComponent } from './AppUser/app-user/app-user.component';
import { AppUserDialogComponent } from './AppUser/app-user-dialog/app-user-dialog.component';
import { AppUserSelectorComponent } from './AppUser/app-user-selector/app-user-selector.component';
import { CityComponent } from './Person/city/city.component';
import { CityDialogComponent } from './Person/city-dialog/city-dialog.component';
import { CitySelectorComponent } from './Person/city-selector/city-selector.component';
import { ProvinceComponent } from './Person/province/province.component';
import { ProvinceDialogComponent } from './Person/province-dialog/province-dialog.component';
import { ProvinceSelectorComponent } from './Person/province-selector/province-selector.component';
import { AppUserStationComponent } from './AppUser/app-user-station/app-user-station.component';
import { AppUserStationDialogComponent } from './AppUser/app-user-station-dialog/app-user-station-dialog.component';
import { AppUserStationSelectorComponent } from './AppUser/app-user-station-selector/app-user-station-selector.component';
import { AppErrorComponent } from './AppUser/app-error/app-error.component';
import { AppErrorDialogComponent } from './AppUser/app-error-dialog/app-error-dialog.component';
import { AppLogActionSelectorComponent } from './AppUser/app-log-action-selector/app-log-action-selector.component';
import { IConfig } from 'ngx-mask/lib/ngx-mask.config';
import { environment } from 'src/environments/environment.prod';
import { AppUserPasswordDialogComponent } from './AppUser/app-user-password-dialog/app-user-password-dialog.component';



const appConfig = (config: ConfigService) => {
  return () => {
    return config.loadConfig();
  };
};

const maskConfig: Partial<IConfig> = {
  validation: false,
};



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ConfirmDialogComponent,
    MessageBoxComponent,
    SnackComponent,
    JalaliPipe,
    PageNotFoundComponent,
    LoginComponent,
    IndexComponent,
    AppSettingComponent,
    AppLogComponent,
    AppUserGroupComponent,
    AppUserGroupDialogComponent,
    AppUserGroupSelectorComponent,
    AppUserRoleSelectorComponent,
    GenderSelectorComponent,
    PersonComponent,
    PersonDialogComponent,
    PersonSelectorComponent,
    PersonGroupComponent,
    PersonGroupDialogComponent,
    PersonGroupSelectorComponent,
    OrganizationComponent,
    OrganizationDialogComponent,
    OrganizationSelectorComponent,
    AppUserComponent,
    AppUserDialogComponent,
    AppUserSelectorComponent,
    CityComponent,
    CityDialogComponent,
    CitySelectorComponent,
    ProvinceComponent,
    ProvinceDialogComponent,
    ProvinceSelectorComponent,
    AppUserStationComponent,
    AppUserStationDialogComponent,
    AppUserStationSelectorComponent,
    AppErrorComponent,
    AppErrorDialogComponent,
    AppLogActionSelectorComponent,
    AppUserPasswordDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'

    }),
    BrowserAnimationsModule
  ],
  providers: [
    ConfigService,
    JalaliPipe,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfig,
      multi: true,
      deps: [ConfigService],
    },
    {
      provide: DateAdapter,
      useClass: MaterialPersianDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },

    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
