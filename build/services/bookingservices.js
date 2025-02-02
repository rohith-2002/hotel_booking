"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bookingservices {
    constructor() {
        this.booking = [];
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
    addBooking(booking) {
        this.booking.push(booking);
    }
    getBookingbyId(id) {
        console.log(this.booking.find(booking => booking.bookingId === id));
        return this.booking.find(booking => booking.bookingId === id);
    }
    getBookings() {
        return this.booking;
    }
    removeBooking(id) {
        const index = this.booking.findIndex(booking => booking.bookingId === id);
        if (index !== -1) {
            this.booking.splice(index, 1);
        }
        console.log(this.booking);
    }
    updateBooking(newbooking, id) {
        const index = this.booking.findIndex(booking => booking.bookingId === id);
        if (index !== -1) {
            this.booking[index] = newbooking;
        }
        console.log("booking ubdated");
    }
}
exports.default = bookingservices;
