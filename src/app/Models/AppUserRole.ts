export class AppUserRole {
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
* نقش
*/
name : string;
 /**
* فعال
*/
avb : boolean;
}
export class AppUserRoleList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: AppUserRole[];
}