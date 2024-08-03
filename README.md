## GRAPHQL Tutorial

GraphQL is a query language for your API, developed by Facebook in 2012 and released publicly in 2015.   

It provides a more efficient, powerful, and flexible alternative to REST. 

With GraphQL, clients can request exactly the data they need, nothing more and nothing less, which can significantly optimize the performance of your API.

Relating data

Example For Lesson 3:

```graphql
query GamesQuery{
  games {
    title
    platform
    reviews {
      author {
        name
      }
      content
      rating
    }
  }
}

```

Response:

```json
{
  "data": {
    "games": [
      {
        "title": "Zelda, Tears of the Kingdom",
        "platform": [
          "Switch"
        ],
        "reviews": [
          {
            "author": {
              "name": "yoshi"
            },
            "content": "lorem ipsum",
            "rating": 10
          },
          {
            "author": {
              "name": "peach"
            },
            "content": "lorem ipsum",
            "rating": 10
          }
        ]
      },
      {
        "title": "Final Fantasy 7 Remake",
        "platform": [
          "PS5",
          "Xbox"
        ],
        "reviews": [
          {
            "author": {
              "name": "mario"
            },
            "content": "lorem ipsum",
            "rating": 9
          },
          {
            "author": {
              "name": "mario"
            },
            "content": "lorem ipsum",
            "rating": 7
          }
        ]
      },
      {
        "title": "Elden Ring",
        "platform": [
          "PS5",
          "Xbox",
          "PC"
        ],
        "reviews": [
          {
            "author": {
              "name": "peach"
            },
            "content": "lorem ipsum",
            "rating": 7
          }
        ]
      },
      {
        "title": "Mario Kart",
        "platform": [
          "Switch"
        ],
        "reviews": [
          {
            "author": {
              "name": "yoshi"
            },
            "content": "lorem ipsum",
            "rating": 5
          }
        ]
      },
      {
        "title": "Pokemon Scarlet",
        "platform": [
          "PS5",
          "Xbox",
          "PC"
        ],
        "reviews": [
          {
            "author": {
              "name": "yoshi"
            },
            "content": "lorem ipsum",
            "rating": 8
          }
        ]
      }
    ]
  }
}
```

Another Example of relating data

Query:

```graphql
query GamesQuery($authorId: ID!){
  author(id: $authorId) {
    name
    verified
    reviews {
      game {
        title
      }
      rating
      content
    }
  }
}
```

Variables:

```json
{
  "authorId": "3"
}
```

Response:

```json
{
  "data": {
    "author": {
      "name": "peach",
      "verified": true,
      "reviews": [
        {
          "game": {
            "title": "Elden Ring"
          },
          "rating": 7,
          "content": "lorem ipsum"
        },
        {
          "game": {
            "title": "Zelda, Tears of the Kingdom"
          },
          "rating": 10,
          "content": "lorem ipsum"
        }
      ]
    }
  }
}
```
