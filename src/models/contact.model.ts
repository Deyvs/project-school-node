import mongoose, { Schema } from "mongoose";

export interface IContact extends Document {
  user_id: mongoose.Schema.Types.ObjectId | string;
  name: string;
  email: string;
  phone: string;
  group: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export const ContactSchema = new Schema<IContact>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Name is a required field!"],
    },
    email: {
      type: String,
      required: [true, "Email is a required field!"],
    },
    phone: {
      type: String,
      required: [true, "Phone is a required field!"],
    },
    group: {
      type: String,
      required: [true, "Group is a required field!"],
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model<IContact>("Contact", ContactSchema);
