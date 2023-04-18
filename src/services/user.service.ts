import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../helpers/api.errors";
import { IUser, User } from "../models/user.model";
import UserRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretJWT = process.env.JWT_SECRET_KEY || "";

class UserService {
  getById(user_id: string) {
    return UserRepository.getById(user_id);
  }
  getByEmail(email: string) {
    return UserRepository.getByEmail(email);
  }

  async create(user: IUser) {
    const userAvailable = await UserRepository.getByEmail(user.email);

    if (userAvailable) {
      throw new BadRequestError("Email already registered!");
    }

    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    return await UserRepository.create(user);
  }

  async authorization(email: string, password: string) {
    const user = await UserRepository.getByEmail(email);

    if (!user) {
      throw new NotFoundError("User not found!");
    }

    const authentication = await bcrypt.compare(password, user.password);

    if (authentication) {
      return jwt.sign({ _id: user.id, email: user.email }, secretJWT, {
        expiresIn: "1h",
      });
    }

    throw new UnauthorizedError("Authentication failed!");
  }

  update(user_id: string, user: Partial<typeof User>) {
    return UserRepository.update(user_id, user);
  }

  delete(user_id: string) {
    return UserRepository.delete(user_id);
  }
}

export default new UserService();
