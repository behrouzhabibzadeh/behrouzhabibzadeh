import { AppLogAction } from './AppLogAction';
export class AppLog {
constructor(a: number,b: string,c: number,e: string,f: string,g: string,h: string,)
{this.id = a;
this.time = b;
this.appLogActionID = c;
this.appUserCode = e;
this.appUserName = f;
this.iP = g;
this.description = h;
}

 /**
* ثبت
*/
id : number;
 /**
* زمان
*/
time : string;
 /**
* رخداد
*/
appLogActionID : number;
 /**
* کدکاربر
*/
appUserCode : string;
 /**
* کاربر
*/
appUserName : string;
 /**
* IP
*/
iP : string;
 /**
* شرح
*/
description : string;
 /**
*
*/
appLogAction : AppLogAction | undefined;
}
export class AppLogList {

constructor(c: number, l: AppLog[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: AppLog[];
}
