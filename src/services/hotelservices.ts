import  {hotel} from "../models/hotel";
class HotelService {
    public hotel: hotel[]=[];
    public addHotel(hotel: hotel): void {
        this.hotel.push(hotel);
    }
    public getHotelbyId(id: number): undefined | hotel {
        console.log( this.hotel.find(hotel => hotel.id === id));
        return this.hotel.find(hotel => hotel.id === id);
    }
   
    public getHotels(): hotel[] {
        return this.hotel;
    }
    public removeHotel(id: number): void {
        const index = this.hotel.findIndex(hotel => hotel.id === id);
        if(index!==-1){
            this.hotel.splice(index,1);
        }
        console.log(this.hotel);
    }
    public updateHotel(newhotel: hotel,id :number): void {
       const index = this.hotel.findIndex(hotel => hotel.id === id);
       if(index!==-1){
         this.hotel[index]=newhotel;
       }
       console.log("hotel ubdated");
    }

   
    
    
}