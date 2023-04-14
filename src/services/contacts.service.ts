import { Contact } from "../models/contact.model";
import ContactRepository from "../repositories/contact.repository";

class ContactService {
  getAll() {
    return ContactRepository.getAll();
  }

  getById(id: string) {
    return ContactRepository.getById(id);
  }

  create(contact: typeof Contact) {
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
