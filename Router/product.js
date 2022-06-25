import express from 'express';
import Product from '../Models/Product.js'
const productRouter = express.Router();


productRouter.get('/', (req, res) => {
    Product.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }

    })
})
productRouter.post('/', (req, res) => {
    const product = req.body;
    Product.create(product, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {

            res.status(201).send(data);
        }

    });
})

export default productRouter;