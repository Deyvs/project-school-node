import { Router } from "express";
import contactsRouter from "./contacts.router";

const router = Router();

router.use("/api/contacts", contactsRouter);

export default router;
