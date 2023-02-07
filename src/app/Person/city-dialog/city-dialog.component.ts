import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Base, msgType} from 'src/app/Base';
import {ApiService} from 'src/app/Api/api.service';
import {City} from 'src/app/Models/City';

@Component({
selector: 'app-city-dialog',
templateUrl: './city-dialog.component.html',
 styleUrls: ['./city-dialog.component.css']
})
export class CityDialogComponent implements OnInit {
title = 'شهر';
isEdit = false;
isLoadingResults = true;
model: any = {};

constructor(
private api: ApiService,
private base :Base,
public dialogRef: MatDialogRef<CityDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data: any) {
}

ngOnInit(): void {
if (this.data.rowid) {
this.api.getCityByID(this.data.rowid)
.subscribe(
(response: City) => {
this.model = response;
this.isLoadingResults = false;
this.isEdit = true;
});
} else {
this.isEdit = false;
this.isLoadingResults = false;
}
}

onSubmit() {
if (this.isEdit) {
this.onPut(this.model);
} else {
this.onPost(this.model);
}
}

onPost(entity: any) {
// static set
this.isLoadingResults = true;
this.api.postCity(entity)
.subscribe(
(result) => {
this.isLoadingResults = false;
this.dialogRef.close();
},
(error) => {
this.base.openSnackBar(error.error, msgType.error);
this.isLoadingResults = false;
}
);
}

onPut(entity: any) {
this.isLoadingResults = true;
this.api.putCity(entity)
.subscribe(
() => {
this.isLoadingResults = false;
this.dialogRef.close();
},
(error) => {
this.isLoadingResults = false;
this.base.openSnackBar(error.error, msgType.error);
});
}

onIdSelected(id : any ){
this.model.id= id;
}

onProvinceIdSelected(id : any ){
this.model.provinceId= id;
}

onNoClick(): void {
this.dialogRef.close();
}
}
