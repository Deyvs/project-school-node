import { BadRequestError, UnauthorizedError } from "../helpers/api.errors";
import { IUser, User } from "../models/user.model";
import UserRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretJWT = process.env.JWT_SECRET_KEY || "";

class UserService {
  getAll() {
    return UserRepository.getAll();
  }

  getByEmail(email: string) {
    return UserRepository.getByEmail(email);
  }

  async create(user: IUser) {
    const userAvailable = UserRepository.getByEmail(user.email);

    if (!userAvailable) {
      throw new BadRequestError("Email already registered!");
    }

    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }
    const userCreated = await UserRepository.create(user);
    return {
      id: userCreated?.id,
      username: userCreated?.username,
      email: userCreated?.email,
    };
  }

  async authorization(email: string, password: string) {
    const user = await UserRepository.getByEmail(email);

    if (!user) {
      throw new BadRequestError("Email not registered!");
    }

    const authentication = await bcrypt.compare(password, user.password);

    if (authentication) {
      return jwt.sign({ _id: user.id, email: user.email }, secretJWT, {
        expiresIn: "1h",
      });
    }

    throw new UnauthorizedError("Authentication failed!");
  }

  update(id: string, user: Partial<typeof User>) {
    return UserRepository.update(id, user);
  }

  delete(id: string) {
    return UserRepository.delete(id);
  }
}

export default new UserService();
