import { Contact } from "./../models/contact.model";

class ContactRepository {
  getAll() {
    return Contact.find();
  }

  getById(id: string) {
    return Contact.findById(id);
  }

  create(contact: typeof Contact) {
    return Contact.create(contact);
  }

  update(id: string, contact: Partial<typeof Contact>) {
    return Contact.findByIdAndUpdate(id, contact);
  }

  delete(id: string) {
    return Contact.findByIdAndDelete(id);
  }
}

export default new ContactRepository();
