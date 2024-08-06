"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class hotel {
    constructor(id, name, address, rooms) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.rooms = rooms;
    }
    getHotelId() {
        return this.id;
    }
    getHotelName() {
        return this.name;
    }
    getHotelAddress() {
        return this.address;
    }
    getHotelRooms() {
        return this.rooms;
    }
    setHotelId(id) {
        this.id = id;
    }
    setHotelName(name) {
        this.name = name;
    }
    setHotelAddress(address) {
        this.address = address;
    }
    setHotelRooms(rooms) {
        this.rooms = rooms;
    }
    toString() {
        return this.id + " " + this.name + " " + this.address + " " + this.rooms;
    }
}
exports.default = hotel;
