import express from 'express';
import Product from '../Models/Product.js'
const productRouter = express.Router();


productRouter.get('/', async (req, res) => {

    try {
        let { page } = req.query || {};
        if (!page || page > 4) {
            page = 1;
        }
        let size = 20;
        const limit = parseInt(size);

        const product = await Product.find({ 'position.page': page }).sort(
            { _id: 1 }).limit(limit);
        size = product.length
        res.send({
            page,
            size,
            product: product,
        });

    } catch (error) {
        console.log(error)
    }



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
productRouter.delete('/', (req, res) => {

    Product.deleteMany((err) => {
        if (err) {
            res.status(500).send(err);
        } else {

            res.status(201).send('deleted ');
        }

    });
})

export default productRouter;