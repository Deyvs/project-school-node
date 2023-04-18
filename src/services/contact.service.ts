import { Contact, IContact } from "../models/contact.model";
import ContactRepository from "../repositories/contact.repository";

class ContactService {
  getAll(id: string) {
    return ContactRepository.getAll(id);
  }

  getById(id: string) {
    const contact = ContactRepository.getById(id);
    return contact;
  }

  create(contact: IContact) {
    return ContactRepository.create(contact);
  }

  update(id: string, contact: Partial<typeof Contact>) {
    return ContactRepository.update(id, contact);
  }

  delete(id: string) {
    return ContactRepository.delete(id);
  }
}

export default new ContactService();
