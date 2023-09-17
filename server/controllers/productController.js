import mongoose from 'mongoose';
import Product from '../models/productModel.js'

export const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find()

        res.status(201).json({ data: allProducts })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const searchProductByFilter = async (req, res) => {
    let { gender, collection } = req.query

    try {
        let queryCond = {
            ...( collection && { selection: collection }),
            ...( gender && { gender }),
        }

        const products = await Product.find(queryCond)

        res.status(201).json({ data: products })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const getProduct = async (req, res) => { 
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }
}

export const createProduct = async (req, res) => {
    const { createdBy, title, description, price, selection, size, gender, imageUrl } = req.body

    try {
        const result = await Product.create({
            title,
            description,
            price,
            selection,
            size,
            gender,
            imageUrl,
            createdBy,
        })

        res.status(201).json({ result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { createdBy, title, description, price, selection, size, imageUrl, gender } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    const updatedProduct = { createdBy, title, description, price, selection, gender, size, imageUrl, _id: id }

    await Product.findByIdAndUpdate(id, updatedProduct, { new: true })

    res.json(updatedProduct)
}

export const deleteProduct = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`)

    await Product.findByIdAndRemove(id)

    res.json({ message: "Product deleted successfully" })
}
