import "express-async-errors";
import { Router } from "express";
import contactRouter from "./contacts.router";
import userRouter from "./user.route";

const router = Router();

router.use("/api/contacts", contactRouter);
router.use("/api/users", userRouter);

export default router;
