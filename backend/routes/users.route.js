import express from "express";
import { deleteUser, getUser , getUsers, postUser, updateUser } from "../controllers/user.controller.js";
const router = express.Router();

// users routes
// create a new user
router.post("/signup", postUser);
// delete user
router.delete("/:id", deleteUser);
// get one user by id
router.get("/:id", getUser);
// get one user by email
router.get("/", getUsers);
// change user ditails
router.put("/:id", updateUser);

export default router;