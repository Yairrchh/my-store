const express = require ('express');

const ProductsService = require('./../services/productService')
const validatorHandler = require('./../middlewares/validatorHandler')
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema
} = require('./../schemas/productSchemas')

const routerProducts = express.Router();
const service = new ProductsService();

routerProducts.get('/', async (req, res) => {
const products = await service.find();
  res.json(products);
});

routerProducts.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});


routerProducts.get('/category/:categoryId/products/:productId', (req,res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  });
});

routerProducts.get('/:id',
  validatorHandler( getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  });

routerProducts.post('/',
    validatorHandler( createProductSchema, 'body'),
      async (req, res) => {
        const body = req.body;
        const newProduct =await service.create(body);
        res.status(201).json(newProduct);
      });

routerProducts.patch('/:id',
    validatorHandler( getProductSchema, 'params'),
    validatorHandler( updateProductSchema, 'body'),

    async (req, res, next) => {
      try {
        const { id } = req.params;
        const body = req.body;
        const update = await service.update(id, body)

        res.json(update);
      } catch (error) {
        next(error)
      }
    });

routerProducts.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const onDelete = await service.delete(id);
  res.json(onDelete);
});


module.exports = routerProducts;
