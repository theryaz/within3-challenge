# Within 3 Backend Challenge

This project was generated as a skeleton with [nx](https://nx.dev).

## Setup
Install dependencies
```
npm install
```
Then, start the dev server
```
npm start
```


API will be available at http://localhost:3333

GraphQL Web GUI: http://localhost:3333/graphql

## Tests

Run unit tests with
```
npm test
```


## Next Steps

The next step to get this project up and running would be to add a Dockerfile to bundle the backend in a docker image. Then configure a continuous delivery pipeline to build & deploy the container to a backend. Services like Heroku are a great way to prototype this but the container would ideally be deloyed into an existing Kubernetes cluster. This step is important since I would want the tests & pipeline configured early so that we can proceed in incremental steps and be confident each new feature is tested and can deploy correctly.

After that, I would add a docker-compose file to run the dev server along with whichever backend services we choose to use (ie, Postgres, MongoDB, Redis, etc.) for ease of development. Each developer could simply run `docker compose up` to spin up the whole development environment. This is important to ensure different operating systems and software versions aren't an issue across the team.

Next, we would continue to add more projects & shared libraries to this repository like a frontend app in React, shared types, utils, and ui components libraries.