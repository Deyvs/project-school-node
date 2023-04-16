import { Request, Response } from "express";
import ContactService from "../../services/contact.service";
import { BadRequestError, NotFoundError } from "../../helpers/api.errors";

export const getContacts = async (req: Request, res: Response) => {
  const { _id: id } = (<any>req).user;
  const contacts = await ContactService.getAll(id);
  res.status(200).json({
    status: res.statusCode,
    length: contacts.length,
    data: {
      contacts,
    },
  });
};

export const getContactById = async (req: Request, res: Response) => {
  const contact = await ContactService.getById(req.params.id);
  console.log(contact);

  if (!contact) {
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
  const { _id: id } = (<any>req).user;
  if (!name || !email || !phone) {
    throw new BadRequestError("All fields are mandatory");
  }

  const contact = ContactService.create({ ...req.body, user_id: id });
  res.status(201).json({
    status: res.statusCode,
    data: {
      contact,
    },
  });
};

export const updateContact = async (req: Request, res: Response) => {
  const contact = await ContactService.getById(req.params.id);

  if (!contact) {
    throw new NotFoundError("Contact not found!");
  }

  await ContactService.update(req.params.id, req.body);
  const contactUpdated = await ContactService.getById(req.params.id);
  res.status(200).json({
    status: res.statusCode,
    data: {
      contactUpdated,
    },
  });
};

export const deleteContact = async (req: Request, res: Response) => {
  const contact = await ContactService.getById(req.params.id);

  if (!contact) {
    throw new NotFoundError("Contact not found!");
  }

  await ContactService.delete(req.params.id);
  res.status(200).json({
    message: "Delete contact!",
  });
};
