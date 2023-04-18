import { Contact, IContact } from "../models/contact.model";
import ContactRepository from "../repositories/contact.repository";

class ContactService {
  getAll(user_id: string) {
    return ContactRepository.getAll(user_id);
  }

  getById(contact_id: string) {
    const contact = ContactRepository.getById(contact_id);
    return contact;
  }

  create(contact: IContact) {
    return ContactRepository.create(contact);
  }

  update(contact_id: string, contact: Partial<typeof Contact>) {
    return ContactRepository.update(contact_id, contact);
  }

  delete(contact_id: string) {
    return ContactRepository.delete(contact_id);
  }
}

export default new ContactService();
