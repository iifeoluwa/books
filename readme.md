# The Books Service
This repository contains a service that registers users and produces list of books available to them through their institutions.

## Instructions
A dummy institution has been created, loaded with few books so as to show the endpoints at work. The domain for this institution is `harvard.edu`.

It is recommended to perform service requests using [Postman](https://www.getpostman.com). 

#### How To Run 
1. Clone this repository into a new directory.
2. Open a terminal window in the directory where the project was cloned.
3. Run `npm install` to install needed dependencies.
4. Run `npm start` to start the app.
4. Visit `localhost:3000` to access the running service.

#### The /users/create endpoint
Sample Request Body: 

```
{
	"name": "Mary John",
	"email": "student@harvard.edu",
	"password": "reallystrongpassword2",
   "role": "student"
}
```
#### The /user/signin endpoint
Sample Request Body: 

```
{
	"email": "student@harvard.edu",
	"password": "reallystrongpassword2"
}
```
#### The /books endpoint
This endpoint requires the token generated at the `users/signin` endpoint. Add this token to the `Authorization` header as a `Bearer` token.

#### Running Tests
From the root of the app directory, run this command;

      npm run test

:)