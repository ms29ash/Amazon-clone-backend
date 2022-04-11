import express from 'express';
import User from '../Models/User.js'
const authRouter = express.Router();
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const saltRounds = 10;
const JWT_SECRET = 'authenticationvalidationcloneamazon';



authRouter.post('/register',

    [
        body('name', 'Enter a valid name').isLength({ min: 1 })
        ,
        body('email').isEmail(),
        body('password').isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // console.log(errors.array())
            return res.status(500).json({ errors: errors.array() });
        }
        try {
            // Check whether the user with this email exists already
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email already exists" })
            }

            const salt = await bcrypt.genSalt(saltRounds)
            const securePassword = await bcrypt.hash(req.body.password, salt)






            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,

            })

            const data = {
                user: {
                    id: user._id,
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET)
            res.json({ authtoken })
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Internal Server Error');
        }


    })



export default authRouter;