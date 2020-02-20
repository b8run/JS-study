const express  = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o App
const app = express();
app.use(express.json()); // permitir que eu possa enviar dados no formato json
app.use(cors()); //aqui é possivel realizar alguns controles de segurança, pois sem nenhum parametro libera o acesso de qualquer dominio

//iniciando BD
mongoose.connect("mongodb://localhost:27017/mongoapi",
    {useNewUrlParser: true,useUnifiedTopology: true}
);

//atualizando os models
requireDir('./src/models');

//const Product = mongoose.model('Product');

//primeira Rota / rotas
//toda chamada ao serviço é realizada o direcionamento de rota.
app.use('/api',require('./src/routes'));

app.listen(3001);