const Listing = require('../../models/Listing');
const Booking = require('../../models/Booking');
const User = require('../../models/User');


exports.resolvers = {

    Query: {
        getUsers: async (parent, args) => {
            return User.find({})
        },
        getUserByID: async (parent, args) => {
            return User.findById(args.id)
        },
        getListAdmin: async (parent, args) => {
            return Listing.find({})

        },
        getListAdminByCity: async(parent,args) => {
            
            return Listing.find({"city" : args.city})
            
        },
        getListAdminByPostalCode: async(parent,args) => {
            
            return Listing.find({"postal_code" : args.postal_code})
            
        },
        getListAdminByUsername: async(parent,args) => {
            return Listing.find({"username" : args.username})    

        },
        getListAdminByName: async(parent,args) => {
            return Listing.find({"listing_title" : args.listing_title})    

        },
        getBookAll: async (args)=>{
            return Booking.find({})

        },
        getBookUser: async (args)=>{
            return Booking.find({"username": args.username})

        },
        login: async (parent, args) => {
            return User.findOne({
                username: args.username,
                password: args.password},
            )
          }
    },

    Mutation: {
        addUser: async (parent, args) => {
            console.log(args)

            let newUser = new User({
                username: args.username,
                firstname: args.firstname,
                lastname: args.lastname,
                password: args.password,
                email: args.email,
                type: args.type
        
            })

            return newUser.save()
        },
        updateUser: async(parent, args) => {
            console.log(args)
            if (!args.id) {
                return;
            }

            return await User.findOneAndUpdate(
                {
                    _id: args.id

                },
                {
                    $set: {
                        username: args.username,
                        firstname: args.firstname,
                        lastname: args.lastname,
                        password: args.password,
                        email: args.email,
                        type: args.type
        
                }
            }, {new: true}, (err, user) => {
                if (err)
                {
                   console. log('Updating the user failed')
                 } else
                 {
                  return user
                 }
            }
          ); 
        },
        deleteUser: async (parent, args) => {
             console.log(args)
             if (!args.id){
                 return JSON.stringify({status: false, "message" : "ID Not found"});
             }
             return await User.findByIdAndDelete(args.id)
        },
        addListAdmin: async(parent,args) => {
            console.log(args)

            let newList = new Listing({
                listing_id: args.listing_id,
                listing_title: args.listing_title ,
                description:args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email:args.email,
                username: args.username
            })
            return newList.save()
        },
        addBookUser: async (parent,args) =>{
            console.log(args)

            let newBookUser = new Booking({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: args.username
            })
            
            return newBookUser.save()
        }
    }
}
  

