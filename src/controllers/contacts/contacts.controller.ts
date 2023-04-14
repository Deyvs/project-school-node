import { Request, Response } from "express";
import ContactService from "../../services/contacts.service";

export const getContacts = async (req: Request, res: Response) => {
  const contacts = await ContactService.getAll();
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
  res.status(200).json({
    status: res.statusCode,
    data: {
      contact,
    },
  });
};

export const createContact = async (req: Request, res: Response) => {
  const contact = ContactService.create(req.body);
  res.status(201).json({
    status: res.statusCode,
    data: {
      contact,
    },
  });
};

export const updateContact = async (req: Request, res: Response) => {
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
  await ContactService.delete(req.params.id);
  res.status(200).json({
    message: "Delete contact!",
  });
};
