export class AppUserGroup {
constructor(_id:number,_name:string,_avb:boolean,_showIndex:number,_color:string,)
{this.id = _id;
this.name = _name;
this.avb = _avb;
this.showIndex = _showIndex;
this.color = _color;
}

 /**
* ثبت
*/
id : number;
 /**
* گروه کاربر
*/
name : string;
 /**
* فعال
*/
avb : boolean;
 /**
* چیدمان
*/
showIndex : number;
 /**
* رنگ بندی
*/
color : string;
}
export class AppUserGroupList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: AppUserGroup[];
}