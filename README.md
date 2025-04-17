# ultracrewapi

## Local Setup

-   clone repo
-   run `npm ci`
-   set up a `.env` file with a `MONGODB_URI` with a variable for your db
-   run `npm run dev`

## Data 

![image](https://github.com/user-attachments/assets/8bbceacd-6049-40a5-9ccf-96b42a949b34)


# Group Users

API endpoint to access user information.

## Authenticate User [/api/auth]

Verify the user exists. If the user is valid (both by username and verified password) return the user information. Otherwise respond with an error code.

### Authenticate User [POST]

-   Request

    -   Headers

                Accept: application/json,
                Authorization: HMAC consumerKey: [signature],
                Date: 6464736744

    -   Body

                {
                    "userName": "ssimmons",
                    "password": "Joker4"
                }

-   Response 200 (application/json)

          {
              "userName": "ssimmons",
              "id": 3984938948,
              "firstName": "Sarah",
              "middleInitial": "J",
              "lastName": "Simmons",
              "streetAddress": "22773 E. Hamilton Ave",
              "email": "xyz@hotmail.com",
              "city": "Williamsburg",
              "country": "USA",
              "tier": "FREE",
              "birthdate": 3888367646646,
              "telephone": "555-555-5555",
              "_links": {
                  "base": "/user",
                  "self": "/user/auth"
              }
          }

-   Response 401 (application/json)

          {
              "status": "failure",
              "reason": "ACCESS_DENIED",
              "code": 401,
              "description": "Request lacks valid authentication credentials for the resource.",
              "_links": {
                  "base": "/users",
                  "self": "/users/auth"
              }
          }

-   Response 403 (application/json)

          {
              "status": "failure",
              "reason": "USER_PERMISSION_DENIED",
              "code": 403,
              "description": "Authorization failure",
              "_links": {
                  "base": "/users",
                  "self": "/users/auth"
              }
          }

-   Response 404 (application/json)

          {
              "status": "failure",
              "reason": "USER_NOT_FOUND",
              "code": 404,
              "description": "User not found",
              "_links": {
                  "base": "/users",
                  "self": "/users/auth"
              }
          }

## Get User [/api/user/:id]

## Get User [GET]

-   Response 200 (application/json)

          {
              "userName": "ssimmons",
              "id": 3984938948,
              "firstName": "Sarah",
              "middleInitial": "J",
              "lastName": "Simmons",
              "streetAddress": "22773 E. Hamilton Ave",
              "email": "xyz@hotmail.com",
              "city": "Williamsburg",
              "country": "USA",
              "tier": "FREE",
              "birthdate": 3888367646646,
              "telephone": "555-555-5555",
              "_links": {
                  "base": "/users",
                  "self": "/user/:id"
              }
          }

## Add User [/api/user/]

## Add User [POST]

## Update User [/api/user/:id]

## Update User [PUT]

# Group Races

API endpoint to access race information.

## Get a Race [/api/race/:id]

### Get a Race [GET]

-   Response 200 (application/json)

          {
              "name": "Hardrock",
              "id": 3984938948,
              "date": "",
              "distance": "",
              "location": "",
              "userId": "",
              "goal": "",
              "timeGoal": "",
              "active": true
              "_links": {
                  "base": "/race",
                  "self": "/race/:id"
              }
          }

## Create a Race [/api/race]

### Create a Race [POST]

-   Request

    -   Headers

                Accept: application/json,
                Authorization: HMAC consumerKey: [signature],
                Date: 6464736744

    -   Body

                {
                    "name": "",
                    "date": "",
                    "distance": "",
                    "location": "",
                    "userId": "",
                    "goal": "",
                    "timeGoal": "",
                    "active": true
                }

-   Response 200 (application/json)

          {
              "name": "Hardrock",
              "id": 3984938948,
              "date": "",
              "distance": "",
              "location": "",
              "userId": "",
              "goal": "",
              "timeGoal": "",
              "active": true
              "_links": {
                  "base": "/race",
                  "self": "/race/"
              }
          }

-   Response 404 (application/json)

          {
              "status": "failure",
              "reason": "RACE_NOT_FOUND",
              "code": 404,
              "description": "Race not found",
              "_links": {
                  "base": "/race",
                  "self": "/race"
              }
          }

## Get a list of Races by user [/api/races]

### Get a list of Races by User [GET]

# Group Aid Stations

API endpoint to access race information.

## Get an Aid Station [/api/aidstation/:id]

### Get an Aid Station [GET]

## Create an Aid Station [/api/aidstation]

### Create an Aid Station [POST]

-   Request

    -   Headers

                Accept: application/json,
                Authorization: HMAC consumerKey: [signature],
                Date: 6464736744

    -   Body

                {
                    distancePoint: "",
                    food: "",
                    liquids: "",
                    mood: ",
                    notes: "",
                    timeOut: "",
                    timeIn: "",
                    raceID: "",
                }

-   Response 200 (application/json)

          {
              "name": "Hardrock",
              "id": 3984938948,
              distancePoint: "",
              food: "",
              liquids: "",
              mood: ",
              notes: "",
              timeOut: "",
              timeIn: "",
              raceID: "",
              "_links": {
                  "base": "/aidstation",
                  "self": "/aidstation"
              }
          }

-   Response 404 (application/json)

          {
              "status": "failure",
              "reason": "RACE_NOT_FOUND",
              "code": 404,
              "description": "Race not found",
              "_links": {
                  "base": "/aidstation",
                  "self": "/aidstation"
              }
          }
