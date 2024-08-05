export  class user{
    id:number;
    username:string;
    phone:number;
    email:string;

    constructor(id:number,username:string,phone:number,email:string){
        this.id=id;
        this.username=username;
        this.phone=phone;
        this.email=email;
    }

    getUserId():number{
        return this.id;
    }
    getUserName():string{
        return this.username;
    }
    getUserPhone():number{
        return this.phone;
    }
    getUserEmail():string{
        return this.email;
    }
    setUserId(id:number){
        this.id=id;
    }
    setUserName(username:string){
        this.username=username;
    }
    setUserPhone(phone:number){
        this.phone=phone;
    }
    setUserEmail(email:string){
        this.email=email;
    }
    toString():string{
        return this.id+" "+this.username+" "+this.phone+" "+this.email;
    }
}