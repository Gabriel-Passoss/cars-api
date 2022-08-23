import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'


const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const categoryAlreadyExists = categoriesRepository.findByName(name)

  if (categoryAlreadyExists) {
    return res.status(404).json({error: 'Category already exists'})
  }

  categoriesRepository.create({ name, description })

  const categories = categoriesRepository.list()

  return res.status(201).json(categories)
})

categoriesRoutes.get('/', (req, res) => {
  const allCategories = categoriesRepository.list()

  return res.status(201).json(allCategories)
})

export { categoriesRoutes }