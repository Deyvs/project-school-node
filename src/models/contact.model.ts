import mongoose, { Schema } from "mongoose";

export const ContactSchema = new Schema({
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
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Contact = mongoose.model("Contact", ContactSchema);
