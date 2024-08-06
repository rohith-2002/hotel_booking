import { booking } from "../models/booking";


export default class bookingservices{

    public booking: booking[]=[];
    public addBooking(booking: booking): void {
        this.booking.push(booking);
    }
    public getBookingbyId(id: number): undefined | booking {
        console.log( this.booking.find(booking => booking.bookingId === id));
        return this.booking.find(booking => booking.bookingId === id);
    }
    public getBookings(): booking[] {
        return this.booking;
    }
    public removeBooking(id: number): void {
        const index = this.booking.findIndex(booking => booking.bookingId === id);
        if(index!==-1){
            this.booking.splice(index,1);
        }
        console.log(this.booking);
    }
    public updateBooking(newbooking: booking,id :number): void {
       const index = this.booking.findIndex(booking => booking.bookingId === id);
       if(index!==-1){
         this.booking[index]=newbooking;
       }
       console.log("booking ubdated");
    }

    // public getBookingByUserId(id: number): booking[] {
    //     const userService = new UserService();
    //     const user = userService.getUserbyId(id);
    //     return this.booking.filter(booking => booking.userId === user);
    // }
    // public getBookingByHotelId(id: number): booking[] {
    //     const hotelService = new HotelService();
    //     const hotel = hotelService.getHotelbyId(id);
    //     return this.booking.filter(booking => booking.hotel === hotel);
    // }
}
