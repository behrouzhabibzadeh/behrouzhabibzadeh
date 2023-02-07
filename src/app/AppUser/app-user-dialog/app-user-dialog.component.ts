import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Base, msgType} from 'src/app/Base';
import {ApiService} from 'src/app/Api/api.service';
import {AppUser} from 'src/app/Models/AppUser';

@Component({
selector: 'app-app-user-dialog',
templateUrl: './app-user-dialog.component.html',
 styleUrls: ['./app-user-dialog.component.css']
})
export class AppUserDialogComponent implements OnInit {
title = 'کاربر';
isEdit = false;
isLoadingResults = true;
model: any = {};

constructor(
private api: ApiService,
private base :Base,
public dialogRef: MatDialogRef<AppUserDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data: any) {
if (data.parent) {
 this.model.appId = data.parent.id;
}
}

ngOnInit(): void {
if (this.data.rowid) {
this.api.getAppUserByID(this.data.rowid)
.subscribe(
(response: AppUser) => {
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
this.api.postAppUser(entity)
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
this.api.putAppUser(entity)
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

onLastUpdateSelected(id: any){
this.model.lastUpdate= id;
}

onLastCallSelected(id: any){
this.model.lastCall= id;
}

onExpireSelected(id: any){
this.model.expire= id;
}

onRegisterSelected(id: any){
this.model.register= id;
}

onAppUserGroupIdSelected(id : any ){
this.model.appUserGroupId= id;
}

onRoleIdSelected(id : any ){
this.model.roleId= id;
}

onNoClick(): void {
this.dialogRef.close();
}
}
