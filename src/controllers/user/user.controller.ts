import { Request, Response } from "express";
import UserService from "../../services/user.service";
import { BadRequestError, NotFoundError } from "../../helpers/api.errors";

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new BadRequestError("All fields are mandatory!");
  }

  const user = await UserService.create(req.body);

  res.status(201).json({
    status: res.statusCode,
    data: {
      user,
    },
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
  const UserUpdated = await UserService.update(user_id, req.body);
  res.status(200).json({
    status: res.statusCode,
    data: {
      UserUpdated,
    },
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const id: string = req.params.user_id;
  await UserService.delete(id);
  res.status(200).json({
    message: "Deleted User!",
  });
};
