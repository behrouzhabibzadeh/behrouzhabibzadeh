import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ApiService} from 'src/app/Api/api.service';
import {AppUserGroup} from 'src/app/Models/AppUserGroup';

@Component({
selector: 'app-app-user-group-selector',
templateUrl: './app-user-group-selector.component.html',
styleUrls: ['./app-user-group-selector.component.css']
})
export class AppUserGroupSelectorComponent implements OnInit {

@Output() selected = new EventEmitter<number>();
@Output() getDataComplete = new EventEmitter();
@Input() lable = 'گروه کاربر';
@Input() setDefault: boolean;
@Input() set selectedID(value: number){this.selector.setValue(value);
 // this.selected.emit(value)
};

selectedData : any ;
isLoading = true;
data: AppUserGroup[] = [];
selector = new FormControl();

constructor(private api: ApiService) {
this.setDefault = false;
}

ngOnInit() {
this.api.getActiveAppUserGroups()
 .subscribe(res => {
this.data = res;
 this.isLoading = false;
this.getDataComplete.emit();

if (this.selectedID) {
this.selector.setValue(+this.selectedID)
 }
else {
if (this.setDefault) {
// this.appapi.getAppSetting(this.appapi.key_, true).subscribe(
// (response) => {
// this.selector.setValue(+response.value);
//  this.selected.emit(+response.value);
//  }
// );
}
}
},
(error) => {
 this.isLoading = true;
});
}

onChange() {
// this.selectedID = this.selectedData;
this.selected.emit(this.selectedData);
 }
}
