import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import userRoute from "./routes/users.route.js";
import moviesRoute from "./routes/movies.route.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
// user route
app.use("/api/profile", userRoute);
app.use("/api/movies", moviesRoute);    




app.listen(5000, () => {
    connectDB();
    console.log("Serverr  is running on port 5000");

});
