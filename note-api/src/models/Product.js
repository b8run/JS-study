const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


// aplicação vai identificar que tem um modo Product e que tem essas propriedades.
const ProductSchema = new mongoose.Schema({
    title: {
        type :String,
        required: true
    },
    description: {
        type :String,
        required: true
    },
    url: {
        type :String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});
ProductSchema.plugin(mongoosePaginate);
mongoose.model('Product',ProductSchema);