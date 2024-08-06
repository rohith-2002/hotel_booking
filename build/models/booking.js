"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booking = void 0;
class booking {
    constructor(bookingId, checkInDate, checkOutDate, userId, hotelId) {
        this.bookingId = bookingId;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.userId = userId;
        this.hotelId = hotelId;
    }
    getBookingId() {
        return this.bookingId;
    }
    getCheckInDate() {
        return this.checkInDate;
    }
    getCheckOutDate() {
        return this.checkOutDate;
    }
    getUserId() {
        return this.userId;
    }
    getHotelId() {
        return this.hotelId;
    }
    setBookingId(bookingId) {
        this.bookingId = bookingId;
    }
    setCheckInDate(checkInDate) {
        this.checkInDate = checkInDate;
    }
    setCheckOutDate(checkOutDate) {
        this.checkOutDate = checkOutDate;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    setHotelId(hotelId) {
        this.hotelId = hotelId;
    }
    toString() {
        return this.bookingId + " " + this.checkInDate + " " + this.checkOutDate + " " + this.userId + " " + this.hotelId + " ";
    }
}
exports.booking = booking;
