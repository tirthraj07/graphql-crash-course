import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js';

import db from './_db.js';

// Now each resolver function has 4 parameters
// 1st is the parent -> The return value of the resolver for this field's parent (i.e., the previous resolver in the resolver chain 
// which we won't use right now as it is used in relationship

// 2nd is the args -> the arguments passed when we query this  ## This is what we want

// 3rd is the contextValue -> An object shared across all resolvers that are executing for a particular operation. Use this to share per-operation state, including authentication information, dataloader instances, and anything else to track across resolvers
// which we don't currently need

// 4th is the info -> Contains information about the operation's execution state, including the field name, the path to the field from the root, and more.
// which we don't currently need

const resolvers = {
	Query : {
		games() {
			return db.games;
		},
		reviews(){
			return db.reviews;
		},
		authors(){
			return db.authors;
		},

		review(parent, args, contextValue, info){
			return db.reviews.find((review)=> review.id===args.id);
		},
		author(_, args){
			return db.authors.find((author)=> author.id === args.id);
		},
		game(_, args){
			return db.games.find((game)=> game.id === args.id);
		}
	},

	// Relating Data
	// We need to make resolver functions to handle the nested queries
	// When ever we search for the Review in the Game object, apollo will look for the Game Resolver to handle the request for the Review object
	// But how will we relate the data?
	// Using the parent argument, we can relate the data => as parent argument is the reference to the value returned by the previous resolver


	Game : {
		reviews(parent){
			return db.reviews.filter((r) => r.game_id === parent.id);
		}
	},
	Review : {
		game(parent){
			return db.games.find((g) => g.id === parent.game_id);
		},
		author(parent){
			return db.authors.find((a) => a.id == parent.author_id);
		}
	},
	Author : {
		reviews(parent){
			return db.reviews.filter((r) => r.author_id === parent.id);
		}
	},

	Mutation: {
		deleteGame(_, args){
			db.games = db.games.filter((g) => g.id !== args.id);
			return db.games;
		}
	}
}


// setup server
const server = new ApolloServer({
	// typeDefs -- definitions of types of data we want to expose on our graph
	// It DEFINES how the graph LOOKS like and entry points
	typeDefs,
	// resolvers -- this contains a bunch of resolver functions
	// It tells HOW we want to HANDLE requests/queries
	/*
	Before writing the resolver functions, we need to look at our Query type

	type Query {
	        reviews: [Review]
	        games: [Game]
	        authors: [Author]

	        review(id: ID!): Review
	        author(id: ID!): Author
	        game(id: ID!): Game

	}
	Now in the resolver : we need to define all the resolver functions for the types we have defined in out root query
	*/
	resolvers


})


const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 }
})


console.log('Server running on http://localhost:4000');
