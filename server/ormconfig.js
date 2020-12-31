require('dotenv/config')

const devConfig = {
  type: 'mongodb',
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  database: 'node-test',
  useUnifiedTopology: true,
  entities: ['./src/schemas/*.ts']
}

const prodConfig = {
  type: 'mongodb',
  host: process.env.MONGO_HOST,
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PASS,
  port: process.env.MONGO_PORT,
  database: 'node-test',
  useUnifiedTopology: true,
  entities: ['./dist/schemas/*.js']
}

module.exports = process.env.NODE_ENV === 'production' ?  prodConfig : devConfig
