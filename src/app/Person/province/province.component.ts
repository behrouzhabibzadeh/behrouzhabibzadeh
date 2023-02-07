﻿import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {Base, msgType} from 'src/app/base';
import {ApiService} from 'src/app/Api/api.service';
import {Province} from 'src/app/Models/Province';
import {ProvinceDialogComponent} from '../province-dialog/province-dialog.component';
@Component({
selector: 'app-province',
templateUrl: './province.component.html',
 styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit, AfterViewInit {
  prefix = 'استان';
  displayedColumns: string[] = ['id',
'name',
'avb',
'act'];
  data: Province[] = [];
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
      this.api.deleteProvince(entityID)
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
return this.api.getProvinces(
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
const dialogRef = this.dialog.open(ProvinceDialogComponent, {
width: '350px',
height: 'auto',
data: {rowid:id}
});
dialogRef.afterClosed().subscribe(result => {
 this.getListData();
});
}
}
