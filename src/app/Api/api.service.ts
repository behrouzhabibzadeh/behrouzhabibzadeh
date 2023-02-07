import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { AppUserGroupList, AppUserGroup } from '../Models/AppUserGroup';
import { AppUserRoleList, AppUserRole } from '../Models/AppUserRole';
import { GenderList, Gender } from '../Models/Gender';
import { PersonList, Person } from '../Models/Person';
import { PersonGroupList, PersonGroup } from '../Models/PersonGroup';
import { OrganizationList, Organization } from '../Models/Organization';
import { AppUserList, AppUser } from '../Models/AppUser';
import { CityList, City } from '../Models/City';
import { ProvinceList, Province } from '../Models/Province';
import { AppUserStationList, AppUserStation } from '../Models/AppUserStation';
import { AppErrorList, AppError } from '../Models/AppError';
import { AppLogActionList, AppLogAction } from '../Models/AppLogAction';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private base: ConfigService

  ) { }


//AppUserGroup
getAppUserGroups(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
const requestUrl = `${this.base.ServerUrl + '/api/AppUserGroups'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
return this.http.get<AppUserGroupList>(requestUrl)}

getActiveAppUserGroups() {
return this.http.get<AppUserGroup[]>(`${this.base.ServerUrl + '/api/AppUserGroups'}`)

}

getAppUserGroupByID(id: string) {
return this.http.get<AppUserGroup>(this.base.ServerUrl + `/api/AppUserGroups/${id}`)

}

public putAppUserGroup(entity: AppUserGroup) {
return this.http.put(this.base.ServerUrl + `/api/AppUserGroups/${entity.id }`, entity);
}

deleteAppUserGroup(entityID: any) {
  return this.http.delete(this.base.ServerUrl + `/api/AppUserGroups/${entityID}`);
}

public postAppUserGroup(entity: AppUserGroup) {
 return this.http.post<any>(this.base.ServerUrl + '/api/AppUserGroups',  entity ) ;}





//AppUserRole
getAppUserRoles(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/AppUserRoles'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<AppUserRoleList>(requestUrl)}

  getActiveAppUserRoles() {
  return this.http.get<AppUserRole[]>(`${this.base.ServerUrl + '/api/AppUserRoles'}`)

  }

  getAppUserRoleByID(id: string) {
  return this.http.get<AppUserRole>(this.base.ServerUrl + `/api/AppUserRoles/${id}`)

  }

  public putAppUserRole(entity: AppUserRole) {
  return this.http.put(this.base.ServerUrl + `/api/AppUserRoles/${entity.id }`, entity);
  }

  deleteAppUserRole(entityID: any) {
    return this.http.delete(this.base.ServerUrl + `/api/AppUserRoles/${entityID}`);
  }

  public postAppUserRole(entity: AppUserRole) {
   return this.http.post<any>(this.base.ServerUrl + '/api/AppUserRoles',  entity ) ;}




//Gender
getGenders(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/Genders'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<GenderList>(requestUrl)}

  getActiveGenders() {
  return this.http.get<Gender[]>(`${this.base.ServerUrl + '/api/Genders'}`)

  }

  getGenderByID(id: string) {
  return this.http.get<Gender>(this.base.ServerUrl + `/api/Genders/${id}`)

  }





//Person
getPersons(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/Persons'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<PersonList>(requestUrl)}

  getActivePersons() {
  return this.http.get<Person[]>(`${this.base.ServerUrl + '/api/Persons'}`)

  }

  getPersonByID(id: string) {
  return this.http.get<Person>(this.base.ServerUrl + `/api/Persons/${id}`)

  }

  public putPerson(entity: Person) {
  return this.http.put(this.base.ServerUrl + `/api/Persons/${entity.id }`, entity);
  }

  deletePerson(entityID: any) {
    return this.http.delete(this.base.ServerUrl + `/api/Persons/${entityID}`);
  }

  public postPerson(entity: Person) {
   return this.http.post<any>(this.base.ServerUrl + '/api/Persons',  entity ) ;}




//PersonGroup
getPersonGroups(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/PersonGroups'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<PersonGroupList>(requestUrl)}

  getActivePersonGroups() {
  return this.http.get<PersonGroup[]>(`${this.base.ServerUrl + '/api/PersonGroups'}`)

  }

  getPersonGroupByID(id: string) {
  return this.http.get<PersonGroup>(this.base.ServerUrl + `/api/PersonGroups/${id}`)

  }

  public putPersonGroup(entity: PersonGroup) {
  return this.http.put(this.base.ServerUrl + `/api/PersonGroups/${entity.id }`, entity);
  }

  deletePersonGroup(entityID: any) {
    return this.http.delete(this.base.ServerUrl + `/api/PersonGroups/${entityID}`);
  }

  public postPersonGroup(entity: PersonGroup) {
   return this.http.post<any>(this.base.ServerUrl + '/api/PersonGroups',  entity ) ;}




//Organization
getOrganizations(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/Organizations'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<OrganizationList>(requestUrl)}

  getActiveOrganizations() {
  return this.http.get<Organization[]>(`${this.base.ServerUrl + '/api/Organizations'}`)

  }

  getOrganizationByID(id: string) {
  return this.http.get<Organization>(this.base.ServerUrl + `/api/Organizations/${id}`)

  }

  public putOrganization(entity: Organization) {
  return this.http.put(this.base.ServerUrl + `/api/Organizations/${entity.id }`, entity);
  }

  deleteOrganization(entityID: any) {
    return this.http.delete(this.base.ServerUrl + `/api/Organizations/${entityID}`);
  }

  public postOrganization(entity: Organization) {
   return this.http.post<any>(this.base.ServerUrl + '/api/Organizations',  entity ) ;}




//AppUser
getAppUsers(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/AppUsers'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<AppUserList>(requestUrl)}

  getActiveAppUsers() {
  return this.http.get<AppUser[]>(`${this.base.ServerUrl + '/api/AppUsers'}`)

  }

  getAppUserByID(id: string) {
  return this.http.get<AppUser>(this.base.ServerUrl + `/api/AppUsers/${id}`)

  }

  public putAppUser(entity: AppUser) {
  return this.http.put(this.base.ServerUrl + `/api/AppUsers/${entity.id }`, entity);
  }

  deleteAppUser(entityID: any) {
    return this.http.delete(this.base.ServerUrl + `/api/AppUsers/${entityID}`);
  }

  public postAppUser(entity: AppUser) {
   return this.http.post<any>(this.base.ServerUrl + '/api/AppUsers',  entity ) ;}




//City
getCitys(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/Citys'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<CityList>(requestUrl)}

  getActiveCitys() {
  return this.http.get<City[]>(`${this.base.ServerUrl + '/api/Citys'}`)

  }

  getCityByID(id: string) {
  return this.http.get<City>(this.base.ServerUrl + `/api/Citys/${id}`)

  }

  public putCity(entity: City) {
  return this.http.put(this.base.ServerUrl + `/api/Citys/${entity.id }`, entity);
  }

  deleteCity(entityID: any) {
    return this.http.delete(this.base.ServerUrl + `/api/Citys/${entityID}`);
  }

  public postCity(entity: City) {
   return this.http.post<any>(this.base.ServerUrl + '/api/Citys',  entity ) ;}





//Province
getProvinces(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/Provinces'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<ProvinceList>(requestUrl)}

  getActiveProvinces() {
  return this.http.get<Province[]>(`${this.base.ServerUrl + '/api/Provinces'}`)

  }

  getProvinceByID(id: string) {
  return this.http.get<Province>(this.base.ServerUrl + `/api/Provinces/${id}`)

  }

  public putProvince(entity: Province) {
  return this.http.put(this.base.ServerUrl + `/api/Provinces/${entity.id }`, entity);
  }

  deleteProvince(entityID: any) {
    return this.http.delete(this.base.ServerUrl + `/api/Provinces/${entityID}`);
  }

  public postProvince(entity: Province) {
   return this.http.post<any>(this.base.ServerUrl + '/api/Provinces',  entity ) ;}




//AppUserStation
getAppUserStations(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/AppUserStations'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<AppUserStationList>(requestUrl)}

  getActiveAppUserStations() {
  return this.http.get<AppUserStation[]>(`${this.base.ServerUrl + '/api/AppUserStations'}`)

  }

  getAppUserStationByID(id: string) {
  return this.http.get<AppUserStation>(this.base.ServerUrl + `/api/AppUserStations/${id}`)

  }

  public putAppUserStation(entity: AppUserStation) {
  return this.http.put(this.base.ServerUrl + `/api/AppUserStations/${entity.id }`, entity);
  }

  deleteAppUserStation(entityID: any) {
    return this.http.delete(this.base.ServerUrl + `/api/AppUserStations/${entityID}`);
  }

  public postAppUserStation(entity: AppUserStation) {
   return this.http.post<any>(this.base.ServerUrl + '/api/AppUserStations',  entity ) ;}





//AppError
getAppErrors(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/AppErrors'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<AppErrorList>(requestUrl)}

  getActiveAppErrors() {
  return this.http.get<AppError[]>(`${this.base.ServerUrl + '/api/AppErrors'}`)

  }

  getAppErrorByID(id: string) {
  return this.http.get<AppError>(this.base.ServerUrl + `/api/AppErrors/${id}`)

  }

  public putAppError(entity: AppError) {
  return this.http.put(this.base.ServerUrl + `/api/AppErrors/${entity.id }`, entity);
  }

  deleteAppError(entityID: any) {
    return this.http.delete(this.base.ServerUrl + `/api/AppErrors/${entityID}`);
  }

  public postAppError(entity: AppError) {
   return this.http.post<any>(this.base.ServerUrl + '/api/AppErrors',  entity ) ;}





//AppLogAction
getAppLogActions(sort: string, direction: string, pageIndex: number, pageSize: number, filter: any) {
  const requestUrl = `${this.base.ServerUrl + '/api/AppLogActions'}/${pageIndex + 1}/${pageSize}/${sort}/${direction}/${JSON.stringify(filter)}`;
  return this.http.get<AppLogActionList>(requestUrl)}

  getActiveAppLogActions() {
  return this.http.get<AppLogAction[]>(`${this.base.ServerUrl + '/api/AppLogActions'}`)

  }

  getAppLogActionByID(id: string) {
  return this.http.get<AppLogAction>(this.base.ServerUrl + `/api/AppLogActions/${id}`)

  }

  public putAppLogAction(entity: AppLogAction) {
  return this.http.put(this.base.ServerUrl + `/api/AppLogActions/${entity.id }`, entity);
  }

  deleteAppLogAction(entityID: any) {
    return this.http.delete(this.base.ServerUrl + `/api/AppLogActions/${entityID}`);
  }

  public postAppLogAction(entity: AppLogAction) {
   return this.http.post<any>(this.base.ServerUrl + '/api/AppLogActions',  entity ) ;}


}
