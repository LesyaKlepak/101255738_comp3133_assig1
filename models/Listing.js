const mongoose =  require("mongoose")

const ListingSchema = new mongoose.Schema({
       
    listing_id:{
        type: String,
        required:[true,"Enter ID"]
    },

    listing_title:{
        type: String,
        required:[true,"Enter Title "]
    },

    description:{
        type: String,
        required:[true,"Enter description required"]
    },

    street:{
        type: String,
        required:[true,"Enter Street required"]
    },

    city:{
        type: String,
        required:[true,"Enter City required"]
    },

    postal_code:{
        type: String,
        required:[true,"Enter Postal Code required"]
    },

    price:{
        type: Number,
        required:[true,"Enter Price required"]
    },

    email:{
        type: String,
        required:true,
        uppercase: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
          }
    },

    username:{
        type: String,
        required:[true,"Enter username required"]
    }

})

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;