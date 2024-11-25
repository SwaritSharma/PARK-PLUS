const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { connection } = require("./CONFIG/db");
const User = require('./MODELS/Usermodel');

const app = express();
app.use(express.json());
app.use(cors());

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET; 


app.post('/signup', async (req, res) => {
    const { username, email, password, phone, pincode, address, state } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        const existingEmail = await User.findOne({ email });

        if (existingUser || existingEmail) {
            return res.status(409).send({ msg: 'User or Email already exists' });
        }
        
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await User.create({
            username,
            email,
            password: hashedPassword,
            phone,
            pincode,
            address,
            state
        });

        res.status(201).send({ msg: 'User created' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).send({ msg: 'Internal Server Error' });
    }
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = jwt.sign({ username }, jwtSecret, { expiresIn: '1h' });
                res.status(200).send({ msg: 'Login successful', token });
            } else {
                res.status(401).send({ msg: 'Incorrect password' });
            }
        } else {
            res.status(404).send({ msg: 'User does not exist' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send({ msg: 'Internal Server Error' });
    }
});


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};


app.get('/users', authenticateToken, async (req, res) => {
    try {
        const username = req.user.username;
        const users = await User.find({ username: { $ne: username } });
        res.json({ users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ msg: 'Internal Server Error' });
    }
});

app.get("/", (req, res) => {
    res.send("SERVER IS READY");
});

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("CONNECTED TO DATABASE");
    } catch (err) {
        console.log("ERROR CONNECTING TO DATABASE " + err);
    }
    console.log("SERVER IS RUNNING ON PORT " + process.env.PORT);
});