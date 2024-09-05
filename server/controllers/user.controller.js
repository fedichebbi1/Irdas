const db=require("../database/index.js")
require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports={
    register:async (req, res) => {
        try {
        const { username, password,email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new db.User({ username,email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
          throw error   
            // res.status(500).json({ error: 'Registration failed' });
        }
    },
    login:async (req, res) => {
        try {
        const { username, password } = req.body;
        const user = await db.User.findOne({ username });
        if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
        expiresIn: '2h',
        });
        res.status(200).json({ token });
        } catch (error) {
        res.status(500).json({ error: 'Login failed' });
        }
    },
    verifyToken:async(req,res,next)=>{
        const token = req.headers['authorization'].split(' ')[1];
    
        console.log(token)
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     const decoded = jwt.verify(token, process.env.SECRET_KEY);
     req.userId = decoded.userId;
     console.log("decodddded",decoded)
     
     next();
     } catch (error) {
     res.status(401).json({ error: 'Invalid token' });
     }
    },
    protected:(req,res)=>{
        res.status(200).json({ message: 'Protected route accessed' })
    },
}