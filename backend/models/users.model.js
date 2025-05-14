import mongoose from "mongoose";

// Define the schema for the users model
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
    });
const users = mongoose.model("Users", usersSchema);
export default users;