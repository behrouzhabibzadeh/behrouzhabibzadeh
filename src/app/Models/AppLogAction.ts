export class AppLogAction {
constructor(_id:number,_name:string,)
{this.id = _id;
this.name = _name;
}

 /**
* ثبت
*/
id : number;
 /**
* عنوان
*/
name : string;
}
export class AppLogActionList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: AppLogAction[];
}