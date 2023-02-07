import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Base, msgType} from 'src/app/base';
import {ApiService} from 'src/app/Api/api.service';
import {AppLogAction} from 'src/app/Models/AppLogAction';

@Component({
selector: 'app-app-log-action-selector',
templateUrl: './app-log-action-selector.component.html',
styleUrls: ['./app-log-action-selector.component.css']
})
export class AppLogActionSelectorComponent implements OnInit {

@Output() selected = new EventEmitter<number>();
@Output() getDataComplete = new EventEmitter();
@Input() lable = 'رخداد';
@Input() setDefault: boolean;
@Input() set selectedID(value: number){this.selector.setValue(value);
 // this.selected.emit(value)
};

selectedData:any;
isLoading = true;
data: AppLogAction[] = [];
selector = new FormControl();

constructor(private api: ApiService) {
this.setDefault = false;
}

ngOnInit() {
this.api.getActiveAppLogActions()
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
