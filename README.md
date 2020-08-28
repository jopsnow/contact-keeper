# contact-keeper

Contact Keeper app based on Brad Traversy's course React Front To Back 2019

## Get Started

- copy `.env.example` to `.env`, and set the values as needed
- If problem connecting to MongoDB -- probably need to whitelist IP again -- https://cloud.mongodb.com/v2/5d74a6c8d5ec13d54791e858#security/network/whitelist

## TODO

- Move all references of `process.env` to something like `config/index.js` or something else.
- Why does the JWT token always say "Invalid Signature" when checked at https://jwt.io ? Brad's does the same

## Outline

- Two different `package.json` files for client and server
- In dev - we'll use `concurrently` to run client and server at same time

## Activity Log

- `npm init -y`
- edit `package.json` to set main file as `server.js`. Why not index.js?
  - add scripts to our package.json
    - `start`: node server.js
    - `server`: nodemon server.js
- install dependencies and devDependencies
  - `npm install express bcryptjs jsonwebtoken config express-validator mongoose`
  - `npm install -D nodemon concurrently`
  - \*\* but we should probably replace `config` with `dotenv` instead.
- Initial `server.js` and test access to it with curl or Postman
- Setup our backend routes and test them with `curl` or Postman - eg:
  - GET localhost:5000
  - PUT localhost:5000/api/contacts/1

```
curl localhost:5000
curl localhost:5000/api/contacts
curl localhost:5000/api/contacts/1 -X PUT
```

- Create `config` folder then create 2 config files within this folder
  - `default.json` - for global variables (this is a part of `config` package)
  - `db.js` - connect to database (mongoose)
- Add `User` mongoose model.
- Add validation for name, email, password using `express-validator`
- Use User model to check MongoDB if user exists, or create new instance of User model, hash the password, and save to DB.
- Authenticate route
- Auth middleware -- extracts the user info from the token, and add the userid to req object

## Errors/Warnings Log with solutions
### mongoose
- DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.
https://github.com/Automattic/mongoose/issues/8156

- DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
https://github.com/Automattic/mongoose/issues/6890

- (intermediate value).select is not a function


### express validator
- requires to express-validator/check are deprecated.You should just use require("express-validator")  instead.
https://express-validator.github.io/docs/sanitization.html

