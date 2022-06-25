import express from 'express';
import ConnectToMongo from './db.js';
import Cors from 'cors';
import serviceRouter from './Router/services.js'
import authRouter from './Router/auth.js'
import productRouter from './Router/product.js'

// App config
const app = express();
const port = process.env.PORT || 9000;


//middleware config
app.use(express.json());
app.use(Cors());

// db config
ConnectToMongo();


// app.use('/',)

app.get('/', (req, res) => {
    res.status(200).send('hello world');
})
// app.post('/services', (req, res) => {
//     const service = req.body;
//     Services.create(service, (err) => {
//         if (err) {
//             res.status(500).send(err)
//         } else {
//             res.status(201).send(service);
//         }
//     });

// })
app.use('/services', serviceRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);






app.listen(port, () => {
    console.log(`App is listening on ${port}`);
})