import { UserController } from "../controllers";
import { Router } from "express";
import validateToken from "../middlewares/validation.token.handler";
import { ContactsController } from "../controllers";

const router = Router();

router.post("/register", UserController.registerUser);

router.post("/login", UserController.loginUser);

router.use(validateToken);

router
  .route("/users/:user_id")
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

router
  .route("/users/:user_id/contacts")
  .get(ContactsController.getContacts)
  .post(ContactsController.createContact);

router
  .route("/users/:user_id/contacts/:contact_id")
  .get(ContactsController.getContactById)
  .put(ContactsController.updateContact)
  .delete(ContactsController.deleteContact);

export default router;
