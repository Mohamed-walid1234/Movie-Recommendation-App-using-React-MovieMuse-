import users from "../models/users.model.js";

// create a new user
export const postUser = async (req, res) => {
    const user = req.body;
    console.log(user);
    // Validate required fields
    if (!user.name || !user.email || !user.password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }
    try {
        // Check if a user with the same email already exists
        const existingUser = await users.findOne({ email: user.email });
        if (existingUser) {
            return res.status(409).json("account already exist");
        }
        // Create and save new user
        const newUser = new users(user);
        await newUser.save();
        res.status(201).json("User created successfully" );
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Error creating user");
    }
}

// delete a user
export const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await users.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error deleting user" });
    }
}

// get one user by id
export const getUser = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await users.findById(id);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error getting user" });
    }
}

// change user ditails
export const updateUser = async (req, res) => {
    const {id} = req.params;
    const user = req.body;
    try {
        await users.findByIdAndUpdate(id, user,{new: true});
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error updating user" });
    }
}

//get all users
export const getUsers = async (req, res) => {
    try {
        const usersList = await users.find();
        res.status(200).json(usersList);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: `${error.message} Error getting users` });
    }
}