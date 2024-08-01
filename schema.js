export const typeDefs = `#graphql

type Game {
	id: ID!
	title: String!
	platform: [String!]!
}

type Review {
	id: ID!
	rating: Int!
	content: String!
}

type Author {
	id: ID!
	name: String!
	verified: Boolean!
}

type Query {
	reviews: [Review]
	games: [Game]
	authors: [Author]
}


`


// datatypes : Int, Float, String, Boolean, ID
// Array : [datatype]
// ! : Required
// If Array Required : [datatype]!
// If array not allowed to be null: [datatype!]!

// Now a Query type is a special type which every graphql schema needs to haved.

// It is NOT Optional and its job is to define an entrypoint of the graph and specify the datatypes of the entry point





