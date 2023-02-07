export class Organization {
constructor(_id:number,_name:string,_avb:boolean,_color:string,)
{this.id = _id;
this.name = _name;
this.avb = _avb;
this.color = _color;
}

 /**
* ثبت
*/
id : number;
 /**
* عنوان
*/
name : string;
 /**
* فعال
*/
avb : boolean;
 /**
* رنگ
*/
color : string;
}
export class OrganizationList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: Organization[];
}