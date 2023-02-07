export class City {
constructor(_id:number,_provinceId:number,_name:string,_showIndex:number,_avb:boolean,)
{this.id = _id;
this.provinceId = _provinceId;
this.name = _name;
this.showIndex = _showIndex;
this.avb = _avb;
}

 /**
* ثبت
*/
id : number;
 /**
* استان
*/
provinceId : number;
 /**
* شهر
*/
name : string;
 /**
* چیدمان
*/
showIndex : number;
 /**
* فعال
*/
avb : boolean;
}
export class CityList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: City[];
}