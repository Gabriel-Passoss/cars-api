import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'


const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  categoriesRepository.create({ name, description })

  const categories = categoriesRepository.list()

  return res.status(201).json(categories)
})

categoriesRoutes.get('/', (req, res) => {
  const allCategories = categoriesRepository.list()

  return res.status(201).json(allCategories)
})

export { categoriesRoutes }