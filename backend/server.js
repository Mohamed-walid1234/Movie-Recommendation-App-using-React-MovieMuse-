import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import signup from "./models/signup.model.js";


dotenv.config();
const app = express();
app.use(express.json());


// SiginUp
// create a new user
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
// delete user
app.delete("/profile/:id", async (req, res) => {
    const {id} = req.params;
    try {
        await signup.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error deleting user" });
    }
});
// get one user
app.get("/profile/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const user = await signup.findById(id);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error getting user" });
    }
});








app.listen(5000, () => {
    connectDB();
    console.log("Serverr  is running on port 5000");

});

// EKw0asaLOSu3pbPn