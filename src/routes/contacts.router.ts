import { ContactsController } from "../controllers";
import { Router } from "express";

console.log("estou aqui 2");
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
