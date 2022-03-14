const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({

    listing_id:{
        type: String,
        required:[true,"Enter Listing ID"],
    },
    booking_id:{
        type: String,
        required:[true,"Enter Booking ID"],
    },
    booking_date:{
        type: Date,
        required:[true,"Booking Date Required "],  
        default: Date.now,

    },
    booking_start:{
        type: Date,
        required:[true,"Please Booking Start Date Required"],
    },
    booking_end:{
        type: Date,
        required:[true,"Please Booking End Date Required "],
    },
    username:{
        type: String,
        required:[true,"Please enter your Username"],
    }
})

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;