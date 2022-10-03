const Category = require('./../models/Category')

const getCategories = async(req, res) => {
    try {
        const category = await Category.find()
        return res.status(200).json({
            ok: true,
            category
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Please contact to support',
            error: error
        })
    }
}

const createCategory = async(req, res) => {
    const { name } = req.body
    try {
        const category = await Category.findOne({ name: name })
        if(category) return res.status(400).json({
            ok: false,
            msg: 'This category is already exist!!'
        })
        const dbCategory = new Category({
            name: name
        })
        dbCategory.save()
        return res.status(200).json({
            ok: true,
            msg: 'Category created!'
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Please contact to support',
            error: error
        })
    }
}

const deleteCategory = async(req, res) => {
    const id = req.params.id    
    try {
        const category = await Category.findOneAndDelete({ _id: id })
        if(category === null) {
            return res.status(404).json({
                ok: false,
                msg: 'This ID not exists in database'
            })
        }
        return res.status(200).json({
            ok: true,
            msg: 'Category deleted!!'
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'Invalid ID please try again',
            error: error
        })
    }
}

const updateCategory = async(req, res) => {
    const id = req.params.id
    const { name } = req.body
    try {
        const category = await Category.findByIdAndUpdate(id, { name: name })
        if(category === null) {
            return res.status(404).json({
                ok: false,
                msg: 'ID doesnt exist in database'
            })
        }
        return res.status(200).json({
            ok: true,
            msg: 'Category updated!'
        })
    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'ID invalid!',
            error: error
        })
    }
}

module.exports = {
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory
}