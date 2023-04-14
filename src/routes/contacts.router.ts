import { ContactsController } from "../controllers";
import { Router } from "express";

const router = Router();

router
  .route("/")
  .get(ContactsController.getContacts)
  .post(ContactsController.createContact);

router
  .route("/:id")
  .get(ContactsController.getContactById)
  .put(ContactsController.updateContact)
  .delete(ContactsController.deleteContact);

export default router;
