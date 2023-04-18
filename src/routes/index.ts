import "express-async-errors";
import { Router } from "express";
import userRouter from "./user.route";

const router = Router();

router.use("/api", userRouter);

export default router;
