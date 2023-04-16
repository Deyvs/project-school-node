import { ContactsController } from "../controllers";
import { Router } from "express";
import validateToken from "../middleware/validation.token.handler";

const router = Router();

router.use(validateToken);

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
