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
- `Contact` model.
  - Get contacts & Add contact (GET & POST)
- Adding the Update & Delete routes. (PUT/DELETE)

- Setting up the client part
  - `npx create-react-app client`
  - add 3 scripts to the **server**
    - `server/package.json`:

```json
"client": "npm start --prefix client",
"clientinstall": "npm install --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\"",
```

- add `proxy` to the **client**
  - `client/package.json`:

```json
"proxy": "http://localhost:5000"
```

- clean up the `client` directory -- we don't need a separate `README.md`, `.git`, `.gitignore` etc.
- Delete from `client` dire:
  - README.md
  - .git -- directory / but mine didn't come with the CRA
  - .gitignore
- Install these in the **client** directory
  - `cd client`
    - `npm install axios react-router-dom uuid react-transition-group`
  - copy in the new `App.css` file from Brad. (this one has some different styles than the one used in GitHub Finder)
- add FontAwesome 
- navigation and placeholder pages: Home + About
- Contact Context
- `Contacts` and `ContactItem` components with dummy data - but styled in UI with buttons
- create Contact Form, and addContact reducer/function to add new user on front end only
- Delete contact functionality
- `setCurrent` and `clearCurrent` functionalities -- added to 'Edit' and 'Delete' buttons
- Update contact record functionality
- Filter contact records functionality
- CSS Transitions for fade-in and fade-out of contact records
- `AuthContext` and initial state
- `Login` and `Register` components and links in Navbar
- `Alerts` -- context and components.  Added and tested on Register component
- User Registration - with check/alert if user already exists
- Authentication -- load user and set token.  Works with Register component only.  Can refresh page and token/user info still in state
- Login - functionality, similar to register.  Displays error on failed login or redirects and set user info in state on valid login
- Navbar - dynamic links for authenticated or guest user.
- Logout functionality and link in Nabar
- `PrivateRoute` component to redirect on pages that should require to be logged in
- AddContact to now use our API backend and store to MongoDB instead of our temp hardcoded local data
- Get Contacts, Loading Spinner, move the ContactFilter to other file, some fixes, and Clear Contacts
- Fix DeleteContact now to work with MongoDB backend.  And some other UI fixes
- fixed an issue that page refresh kept redirecting to Login page - was an error with the `loading: false` default state.
- modify the Delete and Update contact options to work with the API/MongoDB

## Errors/Warnings Log with solutions
### mongoose
- DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.
https://github.com/Automattic/mongoose/issues/8156

- DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
https://github.com/Automattic/mongoose/issues/6890

- DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.
https://github.com/Automattic/mongoose/issues/8886


### express validator
- requires to express-validator/check are deprecated.You should just use require("express-validator")  instead.
https://express-validator.github.io/docs/sanitization.html

### other modules
- Attempted import error: 'uuid' does not contain a default export (imported as 'uuid') 
https://stackoverflow.com/questions/60830848/attempted-import-error-uuid-does-not-contain-a-default-export-imported-as-u

