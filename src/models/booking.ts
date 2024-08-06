export class booking{
    bookingId: number;
    bookingDate: string;
    checkInDate: string;
    checkOutDate: string;
    bookingStatus: string;
    userId: number;
    hotelId: number;
    roomId: number;

    constructor(bookingId: number, bookingDate: string, checkInDate: string, checkOutDate: string, bookingStatus: string, userId: number, hotelId: number, roomId: number) {
        this.bookingId = bookingId;
        this.bookingDate = bookingDate;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.bookingStatus = bookingStatus;
        this.userId = userId;
        this.hotelId = hotelId;
        this.roomId = roomId;
    }

    getBookingId(): number {
        return this.bookingId;
    }
    getBookingDate(): string {
        return this.bookingDate;
    }
    getCheckInDate(): string {
        return this.checkInDate;
    }
    getCheckOutDate(): string {
        return this.checkOutDate;
    }
    getBookingStatus(): string {
        return this.bookingStatus;
    }
    getUserId(): number {
        return this.userId;
    }
    getHotelId(): number {
        return this.hotelId;
    }
    getRoomId(): number {
        return this.roomId;
    }
    setBookingId(bookingId: number) {
        this.bookingId = bookingId;
    }

    setBookingDate(bookingDate: string) {
        this.bookingDate = bookingDate;
    }
    setCheckInDate(checkInDate: string) {
        this.checkInDate = checkInDate;
    }
    setCheckOutDate(checkOutDate: string) {
        this.checkOutDate = checkOutDate;
    }
    setBookingStatus(bookingStatus: string) {
        this.bookingStatus = bookingStatus;
    }
    setUserId(userId: number) {
        this.userId = userId;
    }
    setHotelId(hotelId: number) {
        this.hotelId = hotelId;
    }
    setRoomId(roomId: number) {
        this.roomId = roomId;
    }
    toString(): string {
        return this.bookingId + " " + this.bookingDate + " " + this.checkInDate + " " + this.checkOutDate + " " + this.bookingStatus + " " + this.userId + " " + this.hotelId + " " + this.roomId;
    }   
}