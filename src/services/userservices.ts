import { user } from "../models/user";
export default class UserService{
    public user: user[]=[];
    public addUser(user: user): void {
        this.user.push(user);
    }
    public getUserbyId(id: number): undefined | user {
        console.log( this.user.find(user => user.id === id));
        return this.user.find(user => user.id === id);
    }
    public getUsers(): user[] {
        return this.user;
    }
    public removeUser(id: number): void {
        const index = this.user.findIndex(user => user.id === id);
        if(index!==-1){
            this.user.splice(index,1);
        }
        console.log(this.user);
    }
    public updateUser(newuser: user,id :number): void {
       const index = this.user.findIndex(user => user.id === id);
       if(index!==-1){
         this.user[index]=newuser;       }
       console.log("user ubdated");
    }
}