import mongoose from "mongoose";

// Define the schema for the signup model
const signupSchema = new mongoose.Schema({
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
const signup = mongoose.model("Signup", signupSchema);
export default signup;