export class AppUserStation {
constructor(_id:number,_stationId:number,_appUserId:number,_defaultReceiver:boolean,_active:boolean,)
{this.id = _id;
this.stationId = _stationId;
this.appUserId = _appUserId;
this.defaultReceiver = _defaultReceiver;
this.active = _active;
}

 /**
* ثبت
*/
id : number;
 /**
* ایستگاه
*/
stationId : number;
 /**
* کاربر
*/
appUserId : number;
 /**
* گیرنده پیش فرض
*/
defaultReceiver : boolean;
 /**
* فعال
*/
active : boolean;
}
export class AppUserStationList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: AppUserStation[];
}