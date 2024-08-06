"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HotelService {
    constructor() {
        this.hotels = [];
    }
    addHotel(hotel) {
        this.hotels.push(hotel);
    }
    getHotelbyId(id) {
        console.log(this.hotels.find(hotel => hotel.id === id));
        return this.hotels.find(hotel => hotel.id === id);
    }
    getHotels() {
        return this.hotels;
    }
    removeHotel(id) {
        const index = this.hotels.findIndex(hotel => hotel.id === id);
        if (index !== -1) {
            this.hotels.splice(index, 1);
        }
        console.log(this.hotels);
    }
    updateHotel(newhotel, id) {
        const index = this.hotels.findIndex(hotel => hotel.id === id);
        if (index !== -1) {
            this.hotels[index] = newhotel;
        }
        console.log("hotel ubdated");
    }
}
exports.default = HotelService;
