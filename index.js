import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js';

import db from './_db.js';

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
	        game: [Game]
	        authors: [Author]
	}
	Now in the resolver : we need to define all the resolver functions for the types we have defined in out root query
	*/
	resolvers


})


const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 }
})


console.log('Server running on http://localhost:4000');
