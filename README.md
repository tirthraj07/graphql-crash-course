## GRAPHQL Tutorial

GraphQL is a query language for your API, developed by Facebook in 2012 and released publicly in 2015.   

It provides a more efficient, powerful, and flexible alternative to REST. 

With GraphQL, clients can request exactly the data they need, nothing more and nothing less, which can significantly optimize the performance of your API.


Example For Lesson 1:

```graphql
query GamesQuery{
  game(id: 3){
    title
    platform
  }
  author(id: 1){
    name
    verified
  }
  review(id: 2) {
    content
    rating
  }
}

```

Response:

```json
{
  "data": {
    "game": {
      "title": "Elden Ring",
      "platform": [
        "PS5",
        "Xbox",
        "PC"
      ]
    },
    "author": {
      "name": "mario",
      "verified": true
    },
    "review": {
      "content": "lorem ipsum",
      "rating": 10
    }
  }
}
```

You can also use parameterized variables in queries as follows

Query:

```graphql

query GamesQuery($gameID:ID!, $authorID:ID!, $reviewID:ID!){
  game(id: $gameID){
    title
    platform
  }
  author(id: $authorID){
    name
    verified
  }
  review(id: $reviewID) {
    content
    rating
  }
}

```

Variables:

```json
{
  "authorID": "3",
  "reviewID": "1",
  "gameID": "2"
}
```

Response:

```json
{
  "data": {
    "game": {
      "title": "Final Fantasy 7 Remake",
      "platform": [
        "PS5",
        "Xbox"
      ]
    },
    "author": {
      "name": "peach",
      "verified": true
    },
    "review": {
      "content": "lorem ipsum",
      "rating": 9
    }
  }
}

```
