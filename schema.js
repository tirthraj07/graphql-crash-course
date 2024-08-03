export const typeDefs = `#graphql

type Game {
	id: ID!
	title: String!
	platform: [String!]!

	reviews: [Review!]
}

type Review {
	id: ID!
	rating: Int!
	content: String!

	game: Game!
	author: Author!
}

type Author {
	id: ID!
	name: String!
	verified: Boolean!

	reviews: [Review!]
}

type Query {
	reviews: [Review]
	games: [Game]
	authors: [Author]

	review(id: ID!): Review
	author(id: ID!): Author
	game(id: ID!): Game

}

input AddGameInput {
	title: String!,
	platform: [String!]!
}

input updateGameInput {
	title: String,
	platform: [String!]
}

type Mutation {
	deleteGame(id: ID!) : [Game]!
	addGame(game: AddGameInput!) : Game
	updateGame(id: ID!, edits: updateGameInput!): Game
}



`


// datatypes : Int, Float, String, Boolean, ID
// Array : [datatype]
// ! : Required
// If Array Required : [datatype]!
// If array not allowed to be null: [datatype!]!

// Now a Query type is a special type which every graphql schema needs to haved.

// It is NOT Optional and its job is to define an entrypoint of the graph and specify the datatypes of the entry point





