const Product = require("../model/product.model.js")

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.create(req.body)
        res.status(201).send(req.body)
        console.log("User Created Successfully!!!")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            res.status(404).json({ message: "Product Not Found!!!" })
        }


        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            res.status(404).json({ message: "Product Not Found!!!" })
        }
        res.status(200).json({ message: "Product Deleted Successfully!" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}