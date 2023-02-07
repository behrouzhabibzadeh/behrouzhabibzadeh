export class Gender {
constructor(_id:number,_name:string,_avb:boolean,)
{this.id = _id;
this.name = _name;
this.avb = _avb;
}

 /**
* ثبت
*/
id : number;
 /**
* جنسیت
*/
name : string;
 /**
* فعال
*/
avb : boolean;
}
export class GenderList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: Gender[];
}