import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import usersRoute from "./routes/users.route.js";

dotenv.config();
const app = express();
app.use(express.json());


// users route
app.use("/profile", usersRoute);




app.listen(5000, () => {
    connectDB();
    console.log("Serverr  is running on port 5000");

});

// EKw0asaLOSu3pbPn