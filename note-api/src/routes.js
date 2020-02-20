const express = require('express');

const routes = express.Router();


const ProductController = require("./controllers/ProductControllers");

routes.get('/products',ProductController.index);
routes.get('/Products/:id',ProductController.show);
routes.post('/products',ProductController.store);
routes.put('/Products/:id',ProductController.update);
routes.delete('/Products/:id',ProductController.destroy);


// routes.get('/',(req, res)=>{

//     // Product.create({
//     //     title: 'React',
//     //     description: 'Bild native',
//     //     url: 'http://github.com/facebook'

//     // });

//     return res.send("Hello");
// });

module.exports = routes;