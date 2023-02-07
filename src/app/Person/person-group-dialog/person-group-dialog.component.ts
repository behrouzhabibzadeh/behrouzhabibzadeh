import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Base, msgType} from 'src/app/Base';
import {ApiService} from 'src/app/Api/api.service';
import {PersonGroup} from 'src/app/Models/PersonGroup';

@Component({
selector: 'app-person-group-dialog',
templateUrl: './person-group-dialog.component.html',
 styleUrls: ['./person-group-dialog.component.css']
})
export class PersonGroupDialogComponent implements OnInit {
title = 'گروه شخص';
isEdit = false;
isLoadingResults = true;
model: any = {};

constructor(
private api: ApiService,
private base :Base,
public dialogRef: MatDialogRef<PersonGroupDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data: any) {
if (data.parent) {
 this.model.personId = data.parent.id;
}
}

ngOnInit(): void {
if (this.data.rowid) {
this.api.getPersonGroupByID(this.data.rowid)
.subscribe(
(response: PersonGroup) => {
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
this.api.postPersonGroup(entity)
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
this.api.putPersonGroup(entity)
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
