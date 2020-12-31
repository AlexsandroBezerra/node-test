import cors from 'cors'
import express from 'express'
import routes from './routes'
import { createConnection } from 'typeorm'

createConnection()

const app = express()

const PORT = 3333

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
