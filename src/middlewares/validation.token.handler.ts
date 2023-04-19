import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/api.errors";
import { decode } from "punycode";

const secretJWT = process.env.JWT_SECRET_KEY || "";

const validateToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    let authHeader = req.headers["authorization" || "Authorization"];

    if (!authHeader) {
      throw new UnauthorizedError(
        "User is not authorized or token is missing!"
      );
    }

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      if (!token) {
        throw new UnauthorizedError(
          "User is not authorized or token is missing"
        );
      }

      jwt.verify(token, secretJWT, function (err, decoded) {
        if (err) {
          throw new UnauthorizedError("Failed on authenticate token.");
        }

        req.body = { ...req.body, user_id_validate: (<any>decoded)._id };
        next();
      });
    }

    if (!token) {
      throw new UnauthorizedError("User is not authorized or token is missing");
    }
  }
);

export default validateToken;
