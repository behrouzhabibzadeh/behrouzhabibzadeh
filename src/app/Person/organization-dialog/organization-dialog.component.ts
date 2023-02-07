import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Base, msgType} from 'src/app/Base';
import {ApiService} from 'src/app/Api/api.service';
import {Organization} from 'src/app/Models/Organization';

@Component({
selector: 'app-organization-dialog',
templateUrl: './organization-dialog.component.html',
 styleUrls: ['./organization-dialog.component.css']
})
export class OrganizationDialogComponent implements OnInit {
title = 'سازمان';
isEdit = false;
isLoadingResults = true;
model: any = {};

constructor(
private api: ApiService,
private base :Base,
public dialogRef: MatDialogRef<OrganizationDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data: any) {
}

ngOnInit(): void {
if (this.data.rowid) {
this.api.getOrganizationByID(this.data.rowid)
.subscribe(
(response: Organization) => {
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
this.api.postOrganization(entity)
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
this.api.putOrganization(entity)
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
