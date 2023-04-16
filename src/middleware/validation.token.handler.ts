import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/api.errors";

export interface ICustomRequest extends Request {
  decoded: string;
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
      jwt.verify(token, secretJWT, (err, decoded) => {
        if (err) {
          throw new UnauthorizedError("Access denied!");
        }
        (<any>req).user = {
          _id: (<any>decoded)._id,
          email: (<any>decoded).email,
        };
        next();
      });

      if (!token) {
        throw new UnauthorizedError(
          "User is not authorized or token is missing"
        );
      }
    }
  }
);

export default validateToken;
