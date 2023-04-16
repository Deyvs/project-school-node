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

export const currentUser = async (req: Request, res: Response) => {
  res.json((<any>req).user);
};

// export const getUsers = async (req: Request, res: Response) => {
//   const Users = await UserService.getAll();
//   res.status(200).json({
//     status: res.statusCode,
//     length: Users.length,
//     data: {
//       Users,
//     },
//   });
// };

// export const getUserById = async (req: Request, res: Response) => {
//   const User = await UserService.getById(req.params.id);
//   console.log(User);

//   if (!User) {
//     throw new NotFoundError("User not found!");
//   }

//   res.status(200).json({
//     status: res.statusCode,
//     data: {
//       User,
//     },
//   });
// };

// export const createUser = async (req: Request, res: Response) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     throw new BadRequestError("All fields are mandatory");
//   }

//   const User = UserService.create(req.body);
//   res.status(201).json({
//     status: res.statusCode,
//     data: {
//       User,
//     },
//   });
// };

// export const updateUser = async (req: Request, res: Response) => {
//   const User = await UserService.getById(req.params.id);
//   console.log(User);

//   if (!User) {
//     throw new NotFoundError("User not found!");
//   }

//   await UserService.update(req.params.id, req.body);
//   const UserUpdated = await UserService.getById(req.params.id);
//   res.status(200).json({
//     status: res.statusCode,
//     data: {
//       UserUpdated,
//     },
//   });
// };

// export const deleteUser = async (req: Request, res: Response) => {
//   const User = await UserService.getById(req.params.id);
//   console.log(User);

//   if (!User) {
//     throw new NotFoundError("User not found!");
//   }
//   await UserService.delete(req.params.id);
//   res.status(200).json({
//     message: "Delete User!",
//   });
// };
