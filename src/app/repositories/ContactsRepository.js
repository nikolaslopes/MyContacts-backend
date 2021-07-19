// uuid -> 'Universal Unique ID'
const { v4 } = require('uuid');

const db = require('../../database');

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
  async findAll() {
    // List all registers
    const rows = await db.query('SELECT * FROM contacts');

    return rows;
  }

  async findById(id) {
    // Get One register by id
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);

    return row;
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

  async create({
    name, email, phone, category_id,
  }) {
    // Create One register
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
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
