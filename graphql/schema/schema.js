const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
      type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    
      }
      type Listing {
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!

      }
      type Booking{
        id: ID!
        listing_id: String! 
        booking_id: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        username: String!
    }

      type Query {
          getUsers: [User]
          getUserByID(id: ID!): User
          getListAdmin: [Listing]
          getListAdminByCity(city: String!):[Listing]
          getListAdminByPostalCode(postal_code: String!):[Listing]
          getListAdminByUsername(username:String!):[Listing]
          getListAdminByName(listing_title:String!):[Listing]
          getBookAll: [Booking]
          getBookUser(username: String!):[Booking]
          login(username: String!
                password: String!): User


      }

      type Mutation {
          addUser(username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!): User

          updateUser(id: String!
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!): User

        deleteUser(id: String!): User

          addListAdmin(
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!
            type: String!
          ): Listing

          addBookUser(
            listing_id: String! 
            booking_id: String!
            booking_date: String!
            booking_start: String!
            booking_end: String!
            username: String!
            ):Booking
      }
`


