## GRAPHQL Tutorial

GraphQL is a query language for your API, developed by Facebook in 2012 and released publicly in 2015.   

It provides a more efficient, powerful, and flexible alternative to REST. 

With GraphQL, clients can request exactly the data they need, nothing more and nothing less, which can significantly optimize the performance of your API.

Relating data

Example For Lesson 4:

deleteGame Query Example
```graphql
mutation deleteGames($deleteGameId: ID!){
  deleteGame(id: $deleteGameId) {
    id
    title
    platform
  }
}
```

Variables:

```json
{
  "deleteGameId": "5"
}
```


Response:

```json
{
  "data": {
    "deleteGame": [
      {
        "id": "1",
        "title": "Zelda, Tears of the Kingdom",
        "platform": [
          "Switch"
        ]
      },
      {
        "id": "2",
        "title": "Final Fantasy 7 Remake",
        "platform": [
          "PS5",
          "Xbox"
        ]
      },
      {
        "id": "3",
        "title": "Elden Ring",
        "platform": [
          "PS5",
          "Xbox",
          "PC"
        ]
      },
      {
        "id": "4",
        "title": "Mario Kart",
        "platform": [
          "Switch"
        ]
      }
    ]
  }
}
```

As you can see, game with id = 5, titled: "Pokemon Scarlet" is deleted


Let us look at how we can addGame

addGame Example Query:

```graphql
mutation AddMutation($game: AddGameInput!) {
  addGame(game: $game) {
    id
    title
    platform
  }
}
```

Variables 
```json
{
  "game": {
    "title": "A new Game",
    "platform": ["Switch","PS5"]
  }
}
```

Response:

```json
{
  "data": {
    "addGame": {
      "id": "5",
      "title": "A new Game",
      "platform": [
        "Switch",
        "PS5"
      ]
    }
  }
}
```

Nows lets look at update game

updateGame Example Query

```graphql
mutation updateMutation($updateGameId: ID!, $edits: updateGameInput!) {
  updateGame(id: $updateGameId, edits: $edits) {
    id
    title
    platform
    
    reviews {
      author {
        name
      }
      content
    }
  }
}
```

Variables

```json
{  
  "updateGameId": "1",
  "edits": {
    "title":"God Of War",
    "platform": [
      "PS5"
    ]
  }
}
```

Response 
```json
{
  "data": {
    "updateGame": {
      "id": "1",
      "title": "God Of War",
      "platform": [
        "PS5"
      ],
      "reviews": [
        {
          "author": {
            "name": "yoshi"
          },
          "content": "lorem ipsum"
        },
        {
          "author": {
            "name": "peach"
          },
          "content": "lorem ipsum"
        }
      ]
    }
  }
}
```
