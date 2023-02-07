import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {Base, msgType} from 'src/app/base';
import {ApiService} from 'src/app/Api/api.service';
import {Person} from 'src/app/Models/Person';
import {PersonDialogComponent} from '../person-dialog/person-dialog.component';
@Component({
selector: 'app-person',
templateUrl: './person.component.html',
 styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, AfterViewInit {
  prefix = 'شخص';
  displayedColumns: string[] = ['id',
// 'code',
'first',
'last',
'enLast',
'enFirst',
'birth',
'nationalCode',
'postCode',
'tel',
'mobile',
'email',
'address',
'organizationId',
'personGroupId',
'genderId',
'register',
'lastUpdate',
'lastLogin',
'lastRequest',
'lastCall',
'cardNumber',
'walletCredit',
'avb',
'getEmail',
'getSMS',
'mobileToken',
'shaba',
'mobileConfirmed',
'nationalCodeConfirmed',
'postCodeConfirmed',
'emailConfirmed',
'expireTime',
'dadName',
'isMaster',
'parentId',
'familyMemberTypeId',
'provinceId',
'cityId',
'act'];
  data: Person[] = [];
search: any = {};
resultsLength = 0;
isLoadingResults = true;
constructor(
public base: Base,
public dialog: MatDialog,
public api: ApiService,
private route: ActivatedRoute,
private router: Router
) {}

@ViewChild(MatPaginator, { static: true })

paginator!: MatPaginator;
@ViewChild(MatSort, { static: true })

sort!: MatSort;

  ngAfterViewInit(): void {
    this.getListData();
  }

  ngOnInit(): void { }

onSearchRefresh() {
this.search = {};
}


  onEdit(entityID:any) {
    this.openDialog(entityID);
  }

  onDelete(entityID:any) {
    if (confirm(`آیا از حذف '${this.prefix}' انتخابی اطمینان دارید؟`)) {
      const prefix = 'حذف ' + this.prefix;
      this.api.deletePerson(entityID)
.subscribe(
(response) => {
this.getListData();
},
(error) => {
this.base.openSnackBar(error.error, msgType.error);
});
}
}

getListData() {
const prefix = 'دریافت ' + this.prefix;
this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
merge(this.sort.sortChange, this.paginator.page)
 .pipe(
 startWith({}),
switchMap(() => {
 this.isLoadingResults = true;
return this.api.getPersons(
this.sort.active, this.sort.direction, this.paginator.pageIndex,
this.paginator.pageSize, this.search);
 }),
 map(data => {
 this.isLoadingResults = false;
 this.resultsLength = data.count;
 return data.ilist;
}),
 catchError(() => {
this.isLoadingResults = false;
 return observableOf([]);
})
).subscribe(data => {
this.data = data;
 });
}

openDialog(id:any): void {
const dialogRef = this.dialog.open(PersonDialogComponent, {
width: '700px',
height: 'auto',
data: {rowid:id}
});
dialogRef.afterClosed().subscribe(result => {
 this.getListData();
});
}
onSearchOrganizationIdSelected(id : any){
 this.search.organizationId=id;
}
onSearchPersonGroupIdSelected(id : any){
 this.search.personGroupId=id;
}
onSearchProvinceIdSelected(id : any){
 this.search.provinceId=id;
}
onSearchCityIdSelected(id : any){
 this.search.cityId=id;
}
}
