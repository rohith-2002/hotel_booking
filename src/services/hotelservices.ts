import  hotel from "../models/hotel";
import bookingservices from "./bookingservices";
 
export default class HotelService {
    public hotels: hotel[]=[];
    public addHotel(hotel: hotel): void {
        this.hotels.push(hotel);
    }
    public getHotelbyId(id: number): undefined | hotel {
        console.log( this.hotels.find(hotel => hotel.id === id));
        return this.hotels.find(hotel => hotel.id === id);
    }
   
    public getHotels(): hotel[] {
        return this.hotels;
    }
    public removeHotel(id: number): void {
        const index = this.hotels.findIndex(hotel => hotel.id === id);
        if(index!==-1){
            this.hotels.splice(index,1);
        }
        console.log(this.hotels);
    }
    public updateHotel(newhotel: hotel,id :number): void {
       const index = this.hotels.findIndex(hotel => hotel.id === id);
       if(index!==-1){
         this.hotels[index]=newhotel;
       }
       console.log("hotel ubdated");
    }

}