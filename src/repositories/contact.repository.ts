import { Contact, IContact } from "./../models/contact.model";

class ContactRepository {
  getAll(user_id: string) {
    return Contact.find({ user_id: user_id });
  }

  getById(id: string) {
    return Contact.findById(id);
  }

  create(contact: IContact) {
    Contact.create(contact);
    const { email } = contact;
    return Contact.findOne({ email });
  }

  update(id: string, contact: Partial<typeof Contact>) {
    return Contact.findByIdAndUpdate(id, contact);
  }

  delete(id: string) {
    return Contact.findByIdAndDelete(id);
  }
}

export default new ContactRepository();
