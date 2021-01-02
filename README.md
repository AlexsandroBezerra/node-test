# node-test

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [MongoDB](https://www.mongodb.com/)
- [React Native](https://reactnative.dev/docs/environment-setup)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/AlexsandroBezerra/node-test.git && cd node-test
```

**Follow the steps below to run the api**

```bash
# Access server folder
$ cd server

# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env

# Create the instance of mongoDB using docker
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

**Follow the steps below to run the web app**

```bash
# Access web folder
$ cd web

# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env

# Start the client
$ yarn dev
```

**Follow the steps below to run the android mobile app**

```bash
# Access mobile folder
$ cd mobile

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Download the google-services.json from your Firebase Project, and copy to `android/app/google-services.json`
$ cp PATH_TO_FILE/google-services.json android/app/google-services.json

# If you are going to emulate with android, run this command
# Be sure to have the emulator open
$ yarn android
```
