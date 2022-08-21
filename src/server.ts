import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({message: 'Hello World!'})
})

app.use('/categories', categoriesRoutes)

app.listen(3333)