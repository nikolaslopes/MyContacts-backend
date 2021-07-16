// uuid -> 'Universal Unique ID'
const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Nikolas',
    email: 'nikolas@mail.com',
    phone: '40028992',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    // List all registers
    return contacts;
  }
}

// Singleton
module.exports = new ContactsRepository();
