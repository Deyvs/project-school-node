import { Request, Response } from "express";
import ContactService from "../../services/contact.service";

import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../../helpers/api.errors";

export const getContacts = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  const contacts = await ContactService.getAll(user_id);
  res.status(200).json({
    status: res.statusCode,
    length: contacts.length,
    data: {
      contacts,
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

  if (!req.user) {
    throw new UnauthorizedError("User don't have permission to upadate!");
  }

  const contact = await ContactService.create({
    ...req.body,
    user_id: user_id,
  });
  res.status(201).json({
    status: res.statusCode,
    data: {
      contact,
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
  const contactUpdated = await ContactService.getById(req.params.contact_id);
  res.status(200).json({
    status: res.statusCode,
    data: {
      contactUpdated,
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
    throw new UnauthorizedError("Access denied!");
  }

  await ContactService.delete(req.params.contact_id);
  res.status(200).json({
    message: "Deleted contact!",
  });
};
