import express from 'express'
import cors from 'cors'
import { getPgVersion } from './db.js'
import songFile from './routes/songroutes.js'
import userFile from './routes/userroutes.js'
import playlistFile from './routes/playlistroutes.js'

getPgVersion()
const app = express()
const port = 5000
app.use(express.json())
app.use(cors())

app.use('/api', songFile)
app.use('/api', userFile)
app.use('/api', playlistFile)

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})