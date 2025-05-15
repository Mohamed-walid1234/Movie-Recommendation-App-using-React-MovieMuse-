import express from "express";
import { deleteUser, getUser , getUserByEmail, postUser, updateUser } from "../controllers/user.controller.js";
const router = express.Router();

// users routes
// create a new user
router.post("/signup", postUser);
// delete user
router.delete("/:id", deleteUser);
// get one user by id
router.get("/:id", getUser);
// get one user by email
router.get("/login/:email", getUserByEmail);
// change user ditails
router.put("/:id", updateUser);

export default router;