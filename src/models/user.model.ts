import mongoose, { Schema } from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  createdAt: string | Date;
}

export const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "Name is a required field!"],
  },
  email: {
    type: String,
    required: [true, "Email is a required field!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Phone is a required field!"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const User = mongoose.model<IUser>("User", UserSchema);
