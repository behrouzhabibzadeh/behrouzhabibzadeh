import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Base, msgType} from 'src/app/base';
import {ApiService} from 'src/app/Api/api.service';
import {AppUserGroup} from 'src/app/Models/AppUserGroup';

@Component({
selector: 'app-app-user-group-dialog',
templateUrl: './app-user-group-dialog.component.html',
 styleUrls: ['./app-user-group-dialog.component.css']
})
export class AppUserGroupDialogComponent implements OnInit {
title = 'گروه کاربر';
isEdit = false;
isLoadingResults = true;
model: any = {};

constructor(
private api: ApiService,
private base :Base,
public dialogRef: MatDialogRef<AppUserGroupDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data: any) {
if (data.parent) {
 this.model.appId = data.parent.id;
}
}

ngOnInit(): void {
if (this.data.rowid) {
this.api.getAppUserGroupByID(this.data.rowid)
.subscribe(
(response: AppUserGroup) => {
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
this.api.postAppUserGroup(entity)
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
this.api.putAppUserGroup(entity)
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

onNoClick(): void {
this.dialogRef.close();
}
}
