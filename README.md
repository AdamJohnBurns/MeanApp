# MeanApp

## API

### Create
* URL: `/users`
* Method: `POST`
* Content type: `application/json`
* Request body:
	`{
		"firstName": "First",
		"lastName": "Last",
		"email": "email@email.com",
		"username": "username",
		"password": "password"
	}`
* Response: `200`


### Read

#### All
* URL: `/users`
* Method: `GET`
* Response: `200`

#### Single
* URL: `/users/[USER_ID]`
* Method: `GET`
* Response: 200


### Update
* URL: `/users/[USER_ID]`
* Method: `PUT`
* Content type: `application/json`
* Request body:
	`{
		"firstName": "First",
		"lastName": "Last",
		"email": "email@email.com",
		"username": "username",
		"password": "password"
	}`


### Delete