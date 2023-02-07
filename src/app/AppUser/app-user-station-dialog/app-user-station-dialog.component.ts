import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Base, msgType} from 'src/app/Base';
import {ApiService} from 'src/app/Api/api.service';
import {AppUserStation} from 'src/app/Models/AppUserStation';

@Component({
selector: 'app-app-user-station-dialog',
templateUrl: './app-user-station-dialog.component.html',
 styleUrls: ['./app-user-station-dialog.component.css']
})
export class AppUserStationDialogComponent implements OnInit {
title = 'ایستگاه کاربر';
isEdit = false;
isLoadingResults = true;
model: any = {};

constructor(
private api: ApiService,
private base :Base,
public dialogRef: MatDialogRef<AppUserStationDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data: any) {
if (data.parent) {
 this.model.appId = data.parent.id;
}
}

ngOnInit(): void {
if (this.data.rowid) {
this.api.getAppUserStationByID(this.data.rowid)
.subscribe(
(response: AppUserStation) => {
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
this.api.postAppUserStation(entity)
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
this.api.putAppUserStation(entity)
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

onStationIdSelected(id : any ){
this.model.stationId= id;
}

onAppUserIdSelected(id : any ){
this.model.appUserId= id;
}

onNoClick(): void {
this.dialogRef.close();
}
}
