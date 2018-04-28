# rfcc-api
A simple NodeJS Backend that generates robots for API testing purposes.

### Endpoints
```
GET /robots.json - Returns lists of robots
POST /robots/:id/extinguish.json - Accepts the robot id and returns the updated object
POST /robots/recycle.json - Accepts an array of ids and returns the same set of ids
PUT /robots/recycle.json - Accepts an array of ids and returns the same set of ids
```

### Sample Robots Response
```
"data": [
    {
      "id": 9575,
      "name": "SQL 8808",
      "configuration": {
        "hasSentience": true,
        "hasWheels": false,
        "hasTracks": true,
        "numberOfRotors": 7,
        "colour": "mint green"
      },
      "statuses": [
        "rusty"
      ]
    },
    {
      "id": 12269,
      "name": "HDD 4518",
      "configuration": {
        "hasSentience": false,
        "hasWheels": false,
        "hasTracks": false,
        "numberOfRotors": 9,
        "colour": "orchid"
      },
      "statuses": [
        
      ]
    },
 ...
```
