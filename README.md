# Class Example

![Integration Tests](https://github.com/joeappleton18/solent-room-finder/actions/workflows/cypress.yaml/badge.svg)

[This project is a proof of concept room tracking application. Over the semester, I produced this application and supporting tutorials to showcase DevOps' best practices.]()




### Features 

- Static code analysis 
  - Prettier 
  - ES Lint 
- Storybook to support a component-driven development approach 
- Testing 
- Cypress and Jest 
- CD
  - Staging and main branch auto-deploy to Vercel
- CI
- Tests and static code analysis automatically run on push and pulls,  using GitHub actions

## Getting Started

- Clone this repository: `git clone https://github.com/joeappleton18/solent-room-finder.git`
- Next navigate into the created `solent-room-finder` folder: `cd solent-room-finder`
- Install the dependencies: `npm install`

### Setting up the database

- Get the connection string of your MongoDB server.In the case of MongoDB Atlas, it should be a string like this (notice how we've added rooms as the database name):

`mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/rooms?retryWrites=true&w=majority`

- If you are running MongoDB locally, it will look something like this:

`mongodb://127.0.0.1:27017/rooms`

- Copy the `.env.local.example` file in this directory to .env.local, which will be ignored by Git)

  - Set your `MONGODB_URI` with the the MongoDB connection string.
  - Set your `MONGODB_MONGODB_URI_TEST` database to `mongodb://127.0.0.1:27017/rooms` if you are working locally. Or, if you are using Atlas MongoDB Atlas, it should be a string like this:

  - `mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/rooms_test?retryWrites=true&w=majority`

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Run the development server: `npm run dev`

- **If you want to see the project stories**:, `npm run "storybook"`
