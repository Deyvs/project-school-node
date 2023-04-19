import { Request, Response } from "express";
import UserService from "../../services/user.service";
import { BadRequestError, NotFoundError } from "../../helpers/api.errors";
import ContactService from "../../services/contact.service";

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new BadRequestError("All fields are mandatory!");
  }

  await UserService.create(req.body);

  res.status(201).json({
    status: res.statusCode,
    message: "Created user!",
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("All fields are mandatory!");
  }

  const token = await UserService.authorization(email, password);

  res.status(200).json({
    status: res.statusCode,
    data: {
      token,
    },
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  await UserService.update(user_id, req.body);
  res.status(200).json({
    status: res.statusCode,
    data: {
      message: "Upadted User!",
    },
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  const contacts = await ContactService.getAll(user_id);
  for (const contact of contacts) {
    await ContactService.delete(contact.id);
  }
  await UserService.delete(user_id);
  res.status(200).json({
    status: res.statusCode,
    data: {
      message: "Deleted user!",
    },
  });
};
