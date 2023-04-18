import { Contact, IContact } from "./../models/contact.model";

class ContactRepository {
  getAll(user_id: string) {
    return Contact.find({ user_id: user_id });
  }

  getById(contact_id: string) {
    return Contact.findById(contact_id);
  }

  create(contact: IContact) {
    return Contact.create(contact);
  }

  update(contact_id: string, contact: Partial<typeof Contact>) {
    return Contact.findByIdAndUpdate(contact_id, contact);
  }

  delete(contact_id: string) {
    return Contact.findByIdAndDelete(contact_id);
  }
}

export default new ContactRepository();
