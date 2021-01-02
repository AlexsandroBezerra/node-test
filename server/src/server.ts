import cors from 'cors'
import express from 'express'
import routes from './routes'
import { createConnection } from 'typeorm'
import morgan from 'morgan'

createConnection()

const app = express()

const PORT = 3333

app.use(cors())
app.use(morgan('common'))
app.use(express.json())
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
