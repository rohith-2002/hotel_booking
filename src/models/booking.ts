export class booking {
    bookingId: number;
    checkInDate: Date;
    checkOutDate: Date;
    userId: number;
    hotelId: number;


    constructor(bookingId: number, checkInDate: Date, checkOutDate: Date, userId: number, hotelId: number) {
        this.bookingId = bookingId;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.userId = userId;
        this.hotelId = hotelId;
    }

    getBookingId(): number {
        return this.bookingId;
    }

    getCheckInDate(): Date {
        return this.checkInDate;
    }
    getCheckOutDate(): Date{
        return this.checkOutDate;
    }

    getUserId(): number {
        return this.userId;
    }
    getHotelId(): number {
        return this.hotelId;
    }

   

    setBookingId(bookingId: number) {
        this.bookingId = bookingId;
    }


    setCheckInDate(checkInDate: Date) {
        this.checkInDate = checkInDate;
    }
    setCheckOutDate(checkOutDate: Date) {
        this.checkOutDate = checkOutDate;
    }

    setUserId(userId: number) {
        this.userId = userId;
    }
    setHotelId(hotelId: number) {
        this.hotelId = hotelId;
    }

    toString(): string {
        return this.bookingId + " " + this.checkInDate + " " + this.checkOutDate + " " + this.userId + " " + this.hotelId + " " ;
    }
}