export class PersonGroup {
constructor(_id:number,_name:string,_avb:boolean,_showIndex:number,_color:string,_isDefault:boolean,)
{this.id = _id;
this.name = _name;
this.avb = _avb;
this.showIndex = _showIndex;
this.color = _color;
this.isDefault = _isDefault;
}

 /**
* ثبت
*/
id : number;
 /**
* گروه شهروند
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
* رنگ
*/
color : string;
 /**
* پیش فرض
*/
isDefault : boolean;
}
export class PersonGroupList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: PersonGroup[];
}