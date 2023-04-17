import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/api.errors";

export interface ICustomRequest extends Request {
  user: {
    _id: string;
    email: string;
  };
}

const secretJWT = process.env.JWT_SECRET_KEY || "";

const validateToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    let authHeader = req.headers["authorization" || "Authorization"];

    if (!authHeader) {
      throw new UnauthorizedError("Access denied!");
    }

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];

      if (!token) {
        throw new UnauthorizedError(
          "User is not authorized or token is missing"
        );
      }

      const userAuth = jwt.verify(token, secretJWT);

      if (!userAuth) {
        throw new UnauthorizedError("User is not authorized!");
      }

      req.user = (<any>userAuth).token;
      next();
    }

    if (!token) {
      throw new UnauthorizedError("User is not authorized or token is missing");
    }
  }
);

export default validateToken;
