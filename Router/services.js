import express from 'express';
import Services from '../Models/Services.js'
const serviceRouter = express.Router();


serviceRouter.get('/', (req, res) => {
    Services.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }

    })
})

export default serviceRouter;