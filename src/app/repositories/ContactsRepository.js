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
    // Get One register
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    // Delete One register
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

// Singleton
module.exports = new ContactsRepository();
