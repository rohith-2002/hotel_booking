"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../logger/logger");
class HotelService {
    constructor() {
        this.hotels = [];
    }
    addHotel(hotel) {
        this.hotels.push(hotel);
        logger_1.logger.info("hotel added");
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
        logger_1.logger.info("hotel removed");
    }
    updateHotel(newhotel, id) {
        const index = this.hotels.findIndex(hotel => hotel.id === id);
        if (index !== -1) {
            this.hotels[index] = newhotel;
        }
        console.log("hotel ubdated");
        logger_1.logger.info("hotel updated");
    }
}
exports.default = HotelService;
