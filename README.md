## GRAPHQL Tutorial

GraphQL is a query language for your API, developed by Facebook in 2012 and released publicly in 2015.   

It provides a more efficient, powerful, and flexible alternative to REST. 

With GraphQL, clients can request exactly the data they need, nothing more and nothing less, which can significantly optimize the performance of your API.


Example For Lesson 1:

```graphql
query GamesQuery {
  games {
    title
    platform
  },
  authors {
    name
    verified
  },
  reviews {
    id
    content
    rating
  }
}
```

Response:

```
{
  "data": {
    "games": [
      {
        "title": "Zelda, Tears of the Kingdom",
        "platform": [
          "Switch"
        ]
      },
      {
        "title": "Final Fantasy 7 Remake",
        "platform": [
          "PS5",
          "Xbox"
        ]
      },
      {
        "title": "Elden Ring",
        "platform": [
          "PS5",
          "Xbox",
          "PC"
        ]
      },
      {
        "title": "Mario Kart",
        "platform": [
          "Switch"
        ]
      },
      {
        "title": "Pokemon Scarlet",
        "platform": [
          "PS5",
          "Xbox",
          "PC"
        ]
      }
    ],
    "authors": [
      {
        "name": "mario",
        "verified": true
      },
      {
        "name": "yoshi",
        "verified": false
      },
      {
        "name": "peach",
        "verified": true
      }
    ],
    "reviews": [
      {
        "id": "1",
        "content": "lorem ipsum",
        "rating": 9
      },
      {
        "id": "2",
        "content": "lorem ipsum",
        "rating": 10
      },
      {
        "id": "3",
        "content": "lorem ipsum",
        "rating": 7
      },
      {
        "id": "4",
        "content": "lorem ipsum",
        "rating": 5
      },
      {
        "id": "5",
        "content": "lorem ipsum",
        "rating": 8
      },
      {
        "id": "6",
        "content": "lorem ipsum",
        "rating": 7
      },
      {
        "id": "7",
        "content": "lorem ipsum",
        "rating": 10
      }
    ]
  }
}
```
