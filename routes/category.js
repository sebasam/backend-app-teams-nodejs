const express = require('express')
const router = express.Router()
const { validateFields } = require('./../middlewares/validationResult')
const { categories } = require('./../middlewares/validationBody')
const { getCategories, createCategory, deleteCategory, updateCategory } = require('./../controllers/categoryController')

router.get('/', getCategories)

router.post('/', categories, validateFields, createCategory)

router.delete('/delete/:id', deleteCategory)

router.put('/update/:id', categories, validateFields, updateCategory)

module.exports = router