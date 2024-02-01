import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: '*',
}));

app.get('/api', (req, res) => {
  res.send('Hello World!')
  console.log('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})