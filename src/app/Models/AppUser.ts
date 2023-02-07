export class AppUser {
constructor(_id:number,_code:string,_email:string,_fullName:string,_mobile:string,_avb:boolean,_lastUpdate:string,_lastCall:string,_bio:string,_getEmail:boolean,_getSMS:boolean,_inChat:boolean,_expire:string,_isSysUser:boolean,_register:string,_mobileToken:string,_appUserGroupId:number,_roleId:number,)
{this.id = _id;
this.code = _code;
this.email = _email;
this.fullName = _fullName;
this.mobile = _mobile;
this.avb = _avb;
this.lastUpdate = _lastUpdate;
this.lastCall = _lastCall;
this.bio = _bio;
this.getEmail = _getEmail;
this.getSMS = _getSMS;
this.inChat = _inChat;
this.expire = _expire;
this.isSysUser = _isSysUser;
this.register = _register;
this.mobileToken = _mobileToken;
this.appUserGroupId = _appUserGroupId;
this.roleId = _roleId;
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
* ایمیل
*/
email : string;
 /**
* نام و نام خانوادگی
*/
fullName : string;
 /**
* تلفن همراه
*/
mobile : string;
 /**
* فعال
*/
avb : boolean;
 /**
* بروزرسانی
*/
lastUpdate : string;
 /**
* آخرین درخواست
*/
lastCall : string;
 /**
* بیوگرافی
*/
bio : string;
 /**
* دریافت ایمیل
*/
getEmail : boolean;
 /**
* دریافت پیامک
*/
getSMS : boolean;
 /**
* فعالسازی شسیستم پیام
*/
inChat : boolean;
 /**
* انقضاء
*/
expire : string;
 /**
* سیستمی
*/
isSysUser : boolean;
 /**
* ثبت نام
*/
register : string;
 /**
* توکن تلفن همراه
*/
mobileToken : string;
 /**
* گروه کاربر
*/
appUserGroupId : number;
 /**
* نقش
*/
roleId : number;
}
export class AppUserList {

constructor(c:number, l:[]) {
this.count = c;
this.ilist = l;
}

count: number;
ilist: AppUser[];
}