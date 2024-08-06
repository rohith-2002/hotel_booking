import { user } from "./models/user";
import  hotel  from "./models/hotel";
import { booking } from "./models/booking";
import UserService from "./services/userservices";
import HotelService from "./services/hotelservices";
import bookingservices from "./services/bookingservices";

const hotelService = new HotelService();

const hotel1= new hotel(1,"Taj","Mumbai",10);
const hotel2= new hotel(2,"Oberoi","Delhi",5);
const hotel3= new hotel(3,"Radisson","Banglore",6);
const hotel4= new hotel(4,"Hyatt","Chennai",3);

hotelService.addHotel(hotel1);
hotelService.addHotel(hotel2);
hotelService.addHotel(hotel3);
hotelService.addHotel(hotel4);

const userService = new UserService();

const user1= new user(1,"Rahul",1234567890,"rahul@test.com");
const user2= new user(2,"Hanuman",1234567891,"Hanuman@test.com");
const user3= new user(3,"Raj",1234567892,"raj@test.com");
const user4= new user(4,"anish",1234567893,"anish@test.com");

userService.addUser(user1);
userService.addUser(user2);
userService.addUser(user3);
userService.addUser(user4);

const bookingService = new bookingservices();

function bookroom(bookingId: number, checkInDate: Date, checkOutDate: Date, userId: number, hotelId: number){
    const photel = hotelService.getHotelbyId(hotelId);
    const puser = userService.getUserbyId(userId);
    if(photel===undefined){
        console.log("Hotel not found");
        return ;
    }
    if(photel.rooms==0&&photel.rooms<0){
         console.log("Rooms are not available");
    }
    const bookings = bookingService.getBookings();
    for(let i=0;i<bookings.length;i++){
        if(bookings[i].userId===userId){
            if((checkInDate>=bookings[i].checkInDate&&checkInDate<=bookings[i].checkOutDate)||(checkOutDate>=bookings[i].checkInDate&&checkOutDate<=bookings[i].checkOutDate)){
                console.log("Room is already booked");
                return ;
            }
        }
    }
    const pbooking = new booking(bookingId,checkInDate,checkOutDate,userId,hotelId);
    bookingService.addBooking(pbooking);
    photel.rooms=photel.rooms-1;
};
function getBookingsByHotelId(id: number): any {
    const hotel = hotelService.getHotelbyId(id);
    if(hotel===undefined){
        console.log("Hotel not found");
        return ;
    }
    const bookings = bookingService.getBookings();
    return bookings.filter(booking => booking.hotelId === id);
}
function getavaIlablerooms(id: number,date:Date): any {
    const hotel = hotelService.getHotelbyId(id);
    if(hotel===undefined){
        console.log("Hotel not found");
        return ;
    }
    const bookings = getBookingsByHotelId(id);
    let count=0;
    for(let i=0;i<bookings.length;i++){
        if(date>=bookings[i].checkInDate&&date<=bookings[i].checkOutDate){
            count++;
        }
    }
    console.log("Available rooms are "+(hotel.rooms-count))
}

bookroom(1,new Date(2021,11,1),new Date(2021,11,5),1,1);
bookroom(2,new Date(2021,11,2),new Date(2021,11,6),2,2);
bookroom(3,new Date(2021,11,3),new Date(2021,11,7),3,3);
bookroom(4,new Date(2021,11,4),new Date(2021,11,8),4,4);



