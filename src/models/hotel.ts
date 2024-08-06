export default class hotel{
    id :number;
    name:string;
    address:string;
    rooms:number;
 constructor(id:number,name:string,address:string,rooms:number){
        this.id=id;
        this.name=name;
        this.address=address;
        this.rooms=rooms;
    }

    getHotelId():number{
        return this.id;
    }
    getHotelName():string{
        return this.name;
    }
    getHotelAddress():string{
        return this.address;
    }
    getHotelRooms():number{
        return this.rooms;
    }
    setHotelId(id:number){
        this.id=id;
    }
    setHotelName(name:string){
        this.name=name;
    }
    setHotelAddress(address:string){
        this.address=address;
    }
    setHotelRooms(rooms:number){
        this.rooms=rooms;
    }
    toString():string{
        return this.id+" "+this.name+" "+this.address+" "+this.rooms;
    }
    

}
