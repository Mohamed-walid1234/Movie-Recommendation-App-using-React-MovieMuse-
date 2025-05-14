import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import signup from "./models/signup.model.js";


dotenv.config();
const app = express();
app.use(express.json());


// SiginUp
app.post("/signup", async (req, res) => {
    const user = req.body;
     console.log(user);
    if (!user.name || !user.email || !user.password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }
    const newUser = new signup(user)
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error creating user" });
    }
});









app.listen(5000, () => {
    connectDB();
    console.log("Serverr  is running on port 5000");

});

// EKw0asaLOSu3pbPn