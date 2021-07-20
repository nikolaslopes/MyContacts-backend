const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    // To list all categories
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    // To create category
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }
}

module.exports = new CategoryController();
