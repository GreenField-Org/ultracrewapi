# ultracrewapi


# Group Users

API endpoint to access user information. 

## Authenticate User [/users/auth]

Verify the user exists. If the user is valid (both by username and verified password) return the user information. Otherwise respond with an error code. 

### Authenticate User [POST]

- Request

  - Headers

            Accept: application/json,
            Authorization: HMAC consumerKey: [signature],
            Date: 6464736744

  - Body

            {
                "userName": "ssimmons",
                "password": "Joker4"
            }

- Response 200 (application/json)

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
            "telephone": "555-555-5555"
        }

- Response 401 (application/json)

        {
            "status": "failure",
            "reason": "ACCESS_DENIED",
            "code": 401,
            "description": "Request lacks valid authentication credentials for the resource."
        }

- Response 403 (application/json)

        {
            "status": "failure",
            "reason": "USER_PERMISSION_DENIED",
            "code": 403,
            "description": "Authorization failure"
        }

- Response 404 (application/json)

        {
            "status": "failure",
            "reason": "USER_NOT_FOUND",
            "code": 404,
            "description": "User not found"
        }
