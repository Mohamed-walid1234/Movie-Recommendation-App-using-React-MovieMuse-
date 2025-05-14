import express from "express";
import { deleteUser, getUser, postUser, updateUser } from "../controllers/user.controller.js";
const router = express.Router();


// SiginUp
// create a new user
router.post("/signup", postUser);
// delete user
router.delete("/:id", deleteUser);
// get one user
router.get("/:id", getUser);
// change user ditails
router.put("/:id", updateUser);

export default router;