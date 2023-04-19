import { Request, Response } from "express";
import ContactService from "../../services/contact.service";

import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../../helpers/api.errors";
import UserService from "../../services/user.service";

export const getContacts = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  const user = await UserService.getById(user_id);

  if (!user) {
    throw new NotFoundError("User not found!");
  }

  if (user.id !== req.body.user_id_validate) {
    throw new UnauthorizedError("User is not authorized or token is missing!");
  }

  const contacts = await ContactService.getAll(user_id);
  const userResponse = {
    user_id: user_id,
    username: user.username,
    email: user.email,
    contacts: [...contacts],
    createdAt: user.createdAt,
    updateAt: user.updatedAt,
  };
  res.status(200).json({
    status: res.statusCode,
    length: contacts.length,
    data: {
      ...userResponse,
    },
  });
};

export const getContactById = async (req: Request, res: Response) => {
  const { user_id, contact_id } = req.params;
  let contact;
  try {
    contact = await ContactService.getById(contact_id);
  } catch (error: any) {
    throw new BadRequestError("Contact_id is not valid!");
  }

  if (!contact) {
    throw new NotFoundError("Contact not found!");
  }

  if (contact.user_id.toString() !== user_id) {
    throw new NotFoundError("Contact not found!");
  }

  res.status(200).json({
    status: res.statusCode,
    data: {
      contact,
    },
  });
};

export const createContact = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  const { user_id } = req.params;

  if (!name || !email || !phone) {
    throw new BadRequestError("All fields are mandatory");
  }

  // if (!req.user) {
  //   throw new UnauthorizedError("User don't have permission to upadate!");
  // }

  const contact = await ContactService.create({
    ...req.body,
    user_id: user_id,
  });
  res.status(201).json({
    status: res.statusCode,
    data: {
      message: "Created contact!",
    },
  });
};

export const updateContact = async (req: Request, res: Response) => {
  const { user_id, contact_id } = req.params;
  let contact;
  try {
    contact = await ContactService.getById(contact_id);
  } catch (error: any) {
    throw new BadRequestError("Contact_id is not valid!");
  }

  if (!contact) {
    throw new NotFoundError("Contact not found!");
  }

  if (contact.user_id.toString() !== user_id) {
    throw new UnauthorizedError("Access denied!");
  }

  await ContactService.update(req.params.contact_id, req.body);
  res.status(200).json({
    status: res.statusCode,
    data: {
      message: "Updated contact!",
    },
  });
};

export const deleteContact = async (req: Request, res: Response) => {
  const { user_id, contact_id } = req.params;
  let contact;
  try {
    contact = await ContactService.getById(contact_id);
  } catch (error: any) {
    throw new BadRequestError("Contact_id is not valid!");
  }
  if (!contact) {
    throw new NotFoundError("Contact not found!");
  }

  if (contact.user_id.toString() !== user_id) {
    throw new UnauthorizedError("Access not authorized!");
  }

  await ContactService.delete(req.params.contact_id);
  res.status(200).json({
    message: "Deleted contact!",
  });
};
