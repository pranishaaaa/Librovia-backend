import express from "express";
import { updateUser } from "../controllers/authentication.controller.js";
import { verifyToken, authorizationRoles } from "../middleware/verifytoken.js";
import { login, register } from "../controllers/authentication.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.put("/profile", verifyToken, updateUser);
export default router;
