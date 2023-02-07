import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Base, msgType} from 'src/app/Base';
import {ApiService} from 'src/app/Api/api.service';
import {Person} from 'src/app/Models/Person';

@Component({
selector: 'app-person-dialog',
templateUrl: './person-dialog.component.html',
 styleUrls: ['./person-dialog.component.css']
})
export class PersonDialogComponent implements OnInit {
title = 'شخص';
isEdit = false;
isLoadingResults = true;
model: any = {};

constructor(
private api: ApiService,
private base :Base,
public dialogRef: MatDialogRef<PersonDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data: any) {
}

ngOnInit(): void {
if (this.data.rowid) {
this.api.getPersonByID(this.data.rowid)
.subscribe(
(response: Person) => {
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
this.api.postPerson(entity)
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
this.api.putPerson(entity)
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

onBirthSelected(id: any){
this.model.birth= id;
}

onOrganizationIdSelected(id : any ){
this.model.organizationId= id;
}

onPersonGroupIdSelected(id : any ){
this.model.personGroupId= id;
}

onGenderIdSelected(id : any ){
this.model.genderId= id;
}

onRegisterSelected(id: any){
this.model.register= id;
}

onLastUpdateSelected(id: any){
this.model.lastUpdate= id;
}

onLastLoginSelected(id: any){
this.model.lastLogin= id;
}

onLastRequestSelected(id: any){
this.model.lastRequest= id;
}

onLastCallSelected(id: any){
this.model.lastCall= id;
}

onExpireTimeSelected(id: any){
this.model.expireTime= id;
}

onParentIdSelected(id : any ){
this.model.parentId= id;
}

onFamilyMemberTypeIdSelected(id : any ){
this.model.familyMemberTypeId= id;
}

onProvinceIdSelected(id : any ){
this.model.provinceId= id;
}

onCityIdSelected(id : any ){
this.model.cityId= id;
}

onNoClick(): void {
this.dialogRef.close();
}
}
