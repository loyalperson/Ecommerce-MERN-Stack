import express from 'express'

const router = express.Router()

import { createProduct, deleteProduct, getProduct, getProducts, searchProductByFilter, updateProduct } from '../controllers/productController.js';

router.get('/search', searchProductByFilter);
router.get('/get-all-products', getProducts);
router.get('/:id', getProduct);

router.post('/create-product', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct)

export default router
