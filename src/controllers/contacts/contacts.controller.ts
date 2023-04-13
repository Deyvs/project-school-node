import { Request, Response } from "express";

export const getContacts = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Get all contacts!",
  });
};

export const getContactById = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Get contact by id!",
  });
};

export const createContact = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Create contact!",
  });
};

export const updateContact = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Update contact!",
  });
};

export const deleteContact = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Delete contact!",
  });
};
