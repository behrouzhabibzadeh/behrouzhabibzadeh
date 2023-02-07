export class AppError {
constructor(_id:number,_des:string,_part:string,_time:string,_cheched:boolean,)
{this.id = _id;
this.des = _des;
this.part = _part;
this.time = _time;
this.cheched = _cheched;
}

 /**
* ثبت
*/
id : number;
 /**
* توضیحات
*/
des : string;
 /**
* بخش
*/
part : string;
 /**
* زمان
*/
time : string;
 /**
* بررسی شده
*/
cheched : boolean;
}
export class AppErrorList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: AppError[];
}