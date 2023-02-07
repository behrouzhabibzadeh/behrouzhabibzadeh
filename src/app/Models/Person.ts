export class Person {
constructor(_id:number,_code:string,_first:string,_last:string,_enLast:string,_enFirst:string,_birth:string,_nationalCode:string,_postCode:string,_tel:string,_mobile:string,_email:string,_address:string,_organizationId:number,_personGroupId:number,_genderId:number,_register:string,_lastUpdate:string,_lastLogin:string,_lastRequest:string,_lastCall:string,_cardNumber:string,_walletCredit:number,_avb:boolean,_getEmail:boolean,_getSMS:boolean,_mobileToken:string,_shaba:string,_mobileConfirmed:boolean,_nationalCodeConfirmed:boolean,_postCodeConfirmed:boolean,_emailConfirmed:boolean,_expireTime:string,_dadName:string,_isMaster:boolean,_parentId:number,_familyMemberTypeId:number,_provinceId:number,_cityId:number,)
{this.id = _id;
this.code = _code;
this.first = _first;
this.last = _last;
this.enLast = _enLast;
this.enFirst = _enFirst;
this.birth = _birth;
this.nationalCode = _nationalCode;
this.postCode = _postCode;
this.tel = _tel;
this.mobile = _mobile;
this.email = _email;
this.address = _address;
this.organizationId = _organizationId;
this.personGroupId = _personGroupId;
this.genderId = _genderId;
this.register = _register;
this.lastUpdate = _lastUpdate;
this.lastLogin = _lastLogin;
this.lastRequest = _lastRequest;
this.lastCall = _lastCall;
this.cardNumber = _cardNumber;
this.walletCredit = _walletCredit;
this.avb = _avb;
this.getEmail = _getEmail;
this.getSMS = _getSMS;
this.mobileToken = _mobileToken;
this.shaba = _shaba;
this.mobileConfirmed = _mobileConfirmed;
this.nationalCodeConfirmed = _nationalCodeConfirmed;
this.postCodeConfirmed = _postCodeConfirmed;
this.emailConfirmed = _emailConfirmed;
this.expireTime = _expireTime;
this.dadName = _dadName;
this.isMaster = _isMaster;
this.parentId = _parentId;
this.familyMemberTypeId = _familyMemberTypeId;
this.provinceId = _provinceId;
this.cityId = _cityId;
}

 /**
* ثبت
*/
id : number;
 /**
* یکتا
*/
code : string;
 /**
* نام
*/
first : string;
 /**
* نام خانوادگی
*/
last : string;
 /**
* First Name
*/
enLast : string;
 /**
* Last Name
*/
enFirst : string;
 /**
* تاریخ تولد
*/
birth : string;
 /**
* کدملی/ شماره گذرنامه
*/
nationalCode : string;
 /**
* کد پستی
*/
postCode : string;
 /**
* تلفن ثابت
*/
tel : string;
 /**
* تلفن همراه
*/
mobile : string;
 /**
* پست الکترونیکی
*/
email : string;
 /**
* نشانی
*/
address : string;
 /**
* سازمان
*/
organizationId : number;
 /**
* گروه شخص
*/
personGroupId : number;
 /**
* جنسیت
*/
genderId : number;
 /**
* زمان ثبت نام
*/
register : string;
 /**
* آخرین بروزرسانی
*/
lastUpdate : string;
 /**
* آخرین ورود
*/
lastLogin : string;
 /**
* آخرین درخواست
*/
lastRequest : string;
 /**
* فعالیت
*/
lastCall : string;
 /**
* شماره کارت
*/
cardNumber : string;
 /**
* موجودی کیف پول
*/
walletCredit : number;
 /**
* فعال
*/
avb : boolean;
 /**
* دریافت ایمیل
*/
getEmail : boolean;
 /**
* دریافت پیامک
*/
getSMS : boolean;
 /**
* توکن تلفن همراه
*/
mobileToken : string;
 /**
* شبا
*/
shaba : string;
 /**
* تایید تلفن همراه
*/
mobileConfirmed : boolean;
 /**
* تایید کدملی
*/
nationalCodeConfirmed : boolean;
 /**
* تایید کد پستی
*/
postCodeConfirmed : boolean;
 /**
* تایید پست الکترونیکی
*/
emailConfirmed : boolean;
 /**
* انقضاء
*/
expireTime : string;
 /**
* نام پدر
*/
dadName : string;
 /**
* نفر اصلی
*/
isMaster : boolean;
 /**
* کد شهروند اصلی
*/
parentId : number;
 /**
* نسبت فامیلی
*/
familyMemberTypeId : number;
 /**
* استان محل سکونت
*/
provinceId : number;
 /**
* شهر محل سکونت
*/
cityId : number;
}
export class PersonList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: Person[];
}