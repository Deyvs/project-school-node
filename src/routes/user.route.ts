import { UserController } from "../controllers";
import { Router } from "express";
import validateToken from "../middleware/validation.token.handler";

const router = Router();

router.post("/register", UserController.registerUser);

router.post("/login", UserController.loginUser);

router.get("/current", validateToken, UserController.currentUser);

export default router;
