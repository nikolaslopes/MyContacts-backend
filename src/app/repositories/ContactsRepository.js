// uuid -> 'Universal Unique ID'
const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Nikolas',
    email: 'nikolas@mail.com',
    phone: '40028992',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Thif',
    email: 'thif@mail.com',
    phone: '112233444',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    // List all registers
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    // Get One register by id
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    // Get One register by email
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    // Delete One register
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    // Create One register
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

// Singleton
module.exports = new ContactsRepository();
