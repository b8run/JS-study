const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        //desestruturação, pega o parametro PAGE no GET
        const {page = 1 } = req.query; // query para parametros get
        const products = await Product.paginate({}, {page, limit: 10});

        return res.json(products);
    },

    async show(req,res){
        const product = await Product.findById(req.params.id);// recupera o ID nos parametros da Rota (Routes.js)
        
        return res.json(product);// retorna o produto em formado JSON, recuperado pelo ID.
    },

    async store(req,res){
        const product  = await Product.create(req.body); //Def uma variavel pra receber todos os dados da REQ.body
        return res.json(product);
        // cod de criação

    },
    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,
            {new : true}); // vou encontrar um produto pelo produto pelo ID, e atualizar as propriedades do req.body, com o new ele retorna o produto atualizado dentro da variavel Product.
        return res.json(product);
    },
    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);
        
        return res.send();

    }

    

};