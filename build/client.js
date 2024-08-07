"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./models/user");
const hotel_1 = __importDefault(require("./models/hotel"));
const booking_1 = require("./models/booking");
const userservices_1 = __importDefault(require("./services/userservices"));
const hotelservices_1 = __importDefault(require("./services/hotelservices"));
const bookingservices_1 = __importDefault(require("./services/bookingservices"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const hotelService = new hotelservices_1.default();
const hotel1 = new hotel_1.default(1, "Taj", "Mumbai", 10);
const hotel2 = new hotel_1.default(2, "Oberoi", "Delhi", 5);
const hotel3 = new hotel_1.default(3, "Radisson", "Banglore", 6);
const hotel4 = new hotel_1.default(4, "Hyatt", "Chennai", 3);
hotelService.addHotel(hotel1);
hotelService.addHotel(hotel2);
hotelService.addHotel(hotel3);
hotelService.addHotel(hotel4);
const userService = new userservices_1.default();
const user1 = new user_1.user(1, "Rahul", 1234567890, "rahul@test.com");
const user2 = new user_1.user(2, "Hanuman", 1234567891, "Hanuman@test.com");
const user3 = new user_1.user(3, "Raj", 1234567892, "raj@test.com");
const user4 = new user_1.user(4, "anish", 1234567893, "anish@test.com");
userService.addUser(user1);
userService.addUser(user2);
userService.addUser(user3);
userService.addUser(user4);
const bookingService = new bookingservices_1.default();
function bookroom(bookingId, checkInDate, checkOutDate, userId, hotelId) {
    const photel = hotelService.getHotelbyId(hotelId);
    const puser = userService.getUserbyId(userId);
    if (photel === undefined) {
        console.log("Hotel not found");
        return;
    }
    const avlrooms = getavaIlablerooms(hotelId, checkInDate);
    if (avlrooms <= 0) {
        console.log("Rooms are not available");
    }
    const bookings = bookingService.getBookings();
    for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].userId === userId) {
            if ((checkInDate >= bookings[i].checkInDate && checkInDate <= bookings[i].checkOutDate) || (checkOutDate >= bookings[i].checkInDate && checkOutDate <= bookings[i].checkOutDate)) {
                console.log("Room is already booked");
                return;
            }
        }
    }
    const pbooking = new booking_1.booking(bookingId, checkInDate, checkOutDate, userId, hotelId);
    bookingService.addBooking(pbooking);
    photel.rooms = photel.rooms - 1;
    console.log("Room booked successfully");
}
;
function getBookingsByHotelId(id) {
    const hotel = hotelService.getHotelbyId(id);
    if (hotel === undefined) {
        console.log("Hotel not found");
        return;
    }
    const bookings = bookingService.getBookings();
    return bookings.filter(booking => booking.hotelId === id);
}
function getavaIlablerooms(id, date) {
    const hotel = hotelService.getHotelbyId(id);
    if (hotel === undefined) {
        console.log("Hotel not found");
        return;
    }
    const bookings = getBookingsByHotelId(id);
    let count = 0;
    for (let i = 0; i < bookings.length; i++) {
        if (date >= bookings[i].checkInDate && date <= bookings[i].checkOutDate) {
            count++;
        }
    }
    console.log("Available rooms are " + (hotel.rooms - count));
}
bookroom(1, new Date(2021, 11, 1), new Date(2021, 11, 5), 1, 1);
bookroom(2, new Date(2021, 11, 2), new Date(2021, 11, 6), 2, 2);
bookroom(3, new Date(2021, 11, 3), new Date(2021, 11, 7), 3, 3);
bookroom(4, new Date(2021, 11, 4), new Date(2021, 11, 8), 4, 4);
getavaIlablerooms(1, new Date(2021, 11, 1));
function avaliblerooms() {
    const hotel = hotelService.getHotels();
    for (let i = 0; i < hotel.length; i++) {
        console.log("Hotel Name: " + hotel[i].name);
        console.log("Available rooms: " + hotel[i].rooms);
    }
}
function checkuseravaliable(username) {
    const user = userService.getUsers();
    for (let i = 0; i < user.length; i++) {
        if (user[i].username === username) {
            return user[i].id;
        }
    }
    return -1;
}
avaliblerooms();
console.log("please enter the bookings details");
const bookingID = Math.floor(Math.random() * 1000);
const checkInDate = new Date(prompt("Enter check in date: "));
console.log(`checkin date :, ${checkInDate}!`);
const checkOutDate = new Date(prompt("Enter check out date: "));
console.log(`checkout date :, ${checkOutDate}!`);
const username = (prompt("Enter username: "));
console.log(`user id :, ${username}!`);
if (checkuseravaliable(username) === -1) {
    console.log("User not found");
}
const userId = checkuseravaliable(username);
const hotelId = parseInt(prompt("Enter hotel id: "));
console.log(`hotel id :, ${hotelId}!`);
bookroom(bookingID, checkInDate, checkOutDate, userId, hotelId);
