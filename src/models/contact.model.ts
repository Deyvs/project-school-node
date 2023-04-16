import mongoose, { Schema } from "mongoose";

export const ContactSchema = new Schema(
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
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", ContactSchema);
