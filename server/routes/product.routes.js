const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.post('/api/products/create', ProductController.createProduct);
    app.put('/api/products/update/:id', ProductController.updateProduct);
    app.delete('/api/products/delete/:id', ProductController.deleteProduct);
}