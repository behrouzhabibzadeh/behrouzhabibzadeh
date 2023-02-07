import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Base, msgType} from 'src/app/Base';
import {ApiService} from 'src/app/Api/api.service';
import {Province} from 'src/app/Models/Province';

@Component({
selector: 'app-province-selector',
templateUrl: './province-selector.component.html',
styleUrls: ['./province-selector.component.css']
})
export class ProvinceSelectorComponent implements OnInit {

@Output() selected = new EventEmitter<number>();
@Output() getDataComplete = new EventEmitter();
@Input() lable = 'استان';
@Input() setDefault: boolean;
@Input() set selectedID(value: number){this.selector.setValue(value);
 // this.selected.emit(value)
};

selectedData : any ;
isLoading = true;
data: Province[] = [];
selector = new FormControl();

constructor(private api: ApiService) {
this.setDefault = false;
}

ngOnInit() {
this.api.getActiveProvinces()
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
